import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import EditNews from './EditNews'

function NewsAndUpdates() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedNews, setSelectedNews] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    
    const handleEditClick = (news) => {
        setSelectedNews(news);
        setShowEditModal(true);
    };
    
    useEffect(() => {
        fetchNews();
    }, [searchTerm]);

    const fetchNews = () => {
        axios
            .get(`https://gamebackend.pythonanywhere.com/api/news/?search=${searchTerm}`)
            .then((response) => {
                setNews(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching news:", error);
                setLoading(false);
            });
    };

    // Function to delete news item
    const deleteNews = (id) => {
        axios
            .delete(`https://gamebackend.pythonanywhere.com/api/delete_news/${id}/`)
            .then(() => {
                // After deletion, fetch the updated news list
                fetchNews();
            })
            .catch((error) => {
                console.error("Error deleting news:", error);
            });
    };

    return (
        <div
            className="vh-100 d-flex flex-column"
            style={{ backgroundColor: "black", paddingTop: "10rem" }}
        >
            <div className="w-100 container d-flex justify-content-between">
                <p className="text-light">News and Updates</p>
                <Link to={"/admin/overview"}>Back</Link>
            </div>

            {/* Search bar */}
            <div className="w-100 container">
                <div className="p-1 bg-light rounded-0 shadow-sm mb-3">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Search News"
                            aria-describedby="button-addon1"
                            className="form-control border-0 bg-light"
                            style={{ boxShadow: "none", borderRadius: "1rem" }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button
                                id="button-addon1"
                                type="button"
                                className="btn btn-link text-danger"
                            >
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="w-100 container"
                style={{ maxHeight: "35rem", overflowY: "auto" }}
            >
                <Table striped bordered hover variant="dark">
                    <thead className="sticky-top">
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">Image</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="7" className="text-center">
                                    Loading...
                                </td>
                            </tr>
                        ) : news.length > 0 ? (
                            news.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.content.slice(0, 100)}...</td> {/* Truncate content */}
                                    <td>
                                        <img
                                            src={`https://gamebackend.pythonanywhere.com/${item.image}`}
                                            alt="News"
                                            style={{ width: '100px', height: 'auto' }}
                                        />
                                    </td>
                                    <td>{new Date(item.created_at).toLocaleDateString()}</td>
                                    {/* Edit Button */}
                                    <td>
                                    <Button
                                        variant="warning"
                                        onClick={() => handleEditClick(item)}
                                    >
                                        Edit
                                    </Button>
                                    </td>
                                    {/* Delete Button */}
                                    <td>
                                        <Button
                                            variant="danger"
                                            onClick={() => deleteNews(item.id)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center">
                                    No News found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                 {/* Edit Modal */}
            {selectedNews && (
                <EditNews
                    show={showEditModal}
                    handleClose={() => setShowEditModal(false)}
                    newsItem={selectedNews}
                    setNews={setNews}
                    newsList={news}
                />
            )}
            </div>
        </div>
    );
}

export default NewsAndUpdates;