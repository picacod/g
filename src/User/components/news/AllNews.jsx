import React, { useState, useEffect } from 'react';
import bg from '../../../assets/bg-2.jpg';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Preloader from '../../../Preloader';



function AllNews() {
    const [news, setNews] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(true);
    const [latestNews, setLatestNews] = useState(null);

    useEffect(() => {
        Aos.init({ duration: 500 });


        const fetchNews = async () => {
            try {
                const response = await axios.get('https://gamebackend.pythonanywhere.com/api/news/');
                setNews(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching news:', error);
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    useEffect(() => {
        const fetchLatestNews = async () => {
            try {
                const response = await axios.get('https://gamebackend.pythonanywhere.com/api/latest_news/');
                setLatestNews(response.data);
            } catch (error) {
                console.error('Error fetching the latest news:', error);
            }
        };

        fetchLatestNews();
    }, []);


    return (
        <>
{
    loading ? <Preloader/> :
//     <> {latestNews && (
//         <div
//             className="box"
//             style={{
//                 height: isMobile ? '90vh' : '70vh',
//                 backgroundImage: `url(https://img.freepik.com/free-photo/person-praying-inside-mosque-focus-architecture_1258-289387.jpg)`,
//                 backgroundSize: 'cover',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'center',
//                 position: 'relative',
//                 zIndex: 5,
//             }}
//         >
//             <div
//                 className="overlay"
//                 style={{
//                     position: 'absolute',
//                     top: 0,
//                     right: 0,
//                     width: isMobile ? '100%' : '60%',
//                     height: '100%',
//                     background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9), black)',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'center',
//                     alignItems: isMobile ? 'center' : 'end',
//                     color: 'white',
//                     padding: '20px',
//                     zIndex: 10,
//                 }}
//             >
//                 <p style={{ color: '#b78846', width: isMobile ? '100%' : '50%', fontSize: isMobile ? '0.7rem' : '1rem' }} className="p-0 m-0" data-aos="fade-in" data-aos-delay="500">
//                     LATEST NEWS
//                 </p>
//                 <p className="p-0 m-0" style={{ fontSize: isMobile ? '2rem' : '4rem', color: '#b78846', width: isMobile ? '100%' : '50%' }} data-aos="fade-in" data-aos-delay="500">
//                     {latestNews.title}
//                 </p>
//                 <div style={{ width: isMobile ? '100%' : '50%' }} className="decorative-line" data-aos="fade-in" data-aos-delay="500">
//                     <div className="decoration decoration-left"></div>
//                     <div className="decoration decoration-right"></div>
//                 </div>
//                 <p
//                     style={{
//                         color: '#b78846',
//                         width: '100%',
//                         fontSize: isMobile ? '0.7rem' : '1rem',
//                         alignSelf: 'flex-end',
//                         textAlign: 'right',
//                     }}
//                     className="p-0 m-0"
//                     data-aos="fade-in"
//                     data-aos-delay="500"
//                 >
//                     {latestNews.created_at}
//                 </p>
//             </div>
//         </div>
//     )}

// <div
//     style={{
//         minHeight: '100vh',
//         maxHeight: 'fit-content',
//         position: 'relative',
//         backgroundImage: `url(${bg})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.9)',
//         backgroundAttachment:'fixed'
//     }}
// >
//     <div
//         style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             height: '350px',
//             background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9),  rgba(0, 0, 0, 0.7),  rgba(0, 0, 0, 0))',
//             zIndex: 1,
//         }}
//     ></div>

//     <div
//         style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backdropFilter: 'blur(8px)',
//             zIndex: 0,
//         }}
//     ></div>
// <div
//         style={{
//             minHeight: '100vh',
//             maxHeight: 'fit-content',
//             position: 'relative',
//             backgroundColor: 'rgba(0, 0, 0, 0.9)',
//         }}
//     >
//         <div className="container-fluid" style={{ padding: '100px 50px' }}>
//             <div className="card-container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
//                 {loading ? (
//                     <p>Loading news...</p>
//                 ) : news.length === 0 ? (
//                     <p>No news available.</p>
//                 ) : (
//                     news.map((item, index) => (
//                         <div className="border-frame" key={index} style={{ width: '30%', height: '450px', marginBottom: '50px' }}>
//                             <Link to={`/news/${item.id}`}>
//                                 <div
//                                     className="inner-frame"
//                                     style={{
//                                         height: '100%',
//                                         backgroundImage: `url(https://gamebackend.pythonanywhere.com${item.image})`,
//                                         backgroundSize: 'cover',
//                                         backgroundPosition: 'center',
//                                         position: 'relative',
//                                         borderRadius: '0px',
//                                         overflow: 'hidden',
//                                         padding: '0',
//                                     }}
//                                 >
//                                     <div
//                                         className="card-content"
//                                         style={{
//                                             position: 'absolute',
//                                             bottom: '0',
//                                             width: '100%',
//                                             padding: '20px',
//                                             background: 'rgba(0, 0, 0, 0.5)',
//                                             textAlign: 'justify',
//                                             color: '#fff',
//                                         }}
//                                     >
//                                         <p className="p-0 m-0" style={{ color: '#b78846', fontSize: '0.7rem' }}>{new Date(item.created_at).toLocaleDateString()}</p>
//                                         <p className="p-0 m-0" style={{ fontSize: '1.6rem', color: '#b78846' }}>{item.title}</p>
//                                         <p className="text-secondary p-0 m-0" style={{ fontSize: '1rem', overflow: 'hidden' }}>
//                                             {expandedIndex === index
//                                                 ? item.content
//                                                 : item.content.length > 100
//                                                 ? `${item.content.slice(0, 100)}...`
//                                                 : item.content}
//                                         </p>
//                                         {item.content.length > 100 && (
//                                             <button
//                                                 onClick={() => toggleExpand(index)}
//                                                 style={{ color: '#b78846', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem' }}
//                                             >
//                                                 {expandedIndex === index ? 'Show Less' : 'Read More'}
//                                             </button>
//                                         )}
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     </div>
// </div>

// {/* Media Queries */}
// <style jsx="true">{`
//     @media (max-width: 1200px) {
//         .border-frame {
//             width: 45% !important;
//         }
//     }

//     @media (max-width: 768px) {
//         .border-frame {
//             width: 100% !important;
//         }

//         .overlay {
//             width: 100% !important;
//         }

//         .container-fluid {
//             padding: 50px !important;
//         }

//         .card-content {
//             padding: 10px !important;
//         }
//     }

//     @media (max-width: 576px) {
//         .card-content p {
//             font-size: 0.8rem !important;
//         }

//         // .overlay p {
//         //     font-size: 2rem !important;
//         // }
//     }
// `}</style> </>
<div className='vh-100 d-flex align-items-center justify-content-center'>
    <p className='text-light'>Soon to be updated...</p>
</div>
}
        </>

    );
}

export default AllNews;
