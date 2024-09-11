import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchSkills();
  }, [searchTerm]);

  const fetchSkills = () => {
    axios
      .get(`https://gamebackend.pythonanywhere.com/api/skills/?search=${searchTerm}`)
      .then((response) => {
        setSkills(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching skills:", error);
        setLoading(false);
      });
  };

  
  const deleteSkill = (skillId) => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      axios
        .delete(`https://gamebackend.pythonanywhere.com/api/delete_skill/${skillId}/`)
        .then(() => {
          setSkills(skills.filter(skill => skill.id !== skillId));
        })
        .catch((error) => {
          console.error("Error deleting skill:", error);
        });
    }
  };

  return (
    <div
      className="vh-100 d-flex flex-column "
      style={{ backgroundColor: "black", paddingTop: "10rem" }}
    >
      <div className="w-100 container d-flex justify-content-between">
        <p className="text-light">Character Skills</p>
        <Link to={"/admin/overview"}>Back</Link>
      </div>

      {/* Search bar */}
      <div className="w-100 container">
        <div className="p-1 bg-light rounded-0 shadow-sm mb-3">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search Skills"
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
              <th scope="col">Character Name</th>
              <th scope="col">Skill Name</th>
              <th scope="col">Created At</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center">
                  Loading...
                </td>
              </tr>
            ) : skills.length > 0 ? (
              skills.map((skill, index) => (
                <tr key={skill.id}>
                  <td>{index + 1}</td>
                  <td>{skill.character.name}</td>
                  <td>{skill.name}</td>
                  <td>{new Date(skill.created_at).toLocaleDateString()}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteSkill(skill.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No Skills found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        
      </div>
    </div>
  );
}

export default Skills;