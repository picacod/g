import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import bg from '../../../assets/bg-2.jpg';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';

function News() {
  const { id } = useParams(); // Get the news ID from the route
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define isMobile using a media query
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    // Fetch the news item from the backend using the ID
    axios.get(`https://gamebackend.pythonanywhere.com/api/selected_news/${id}/`)
      .then((response) => {
        setNewsItem(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the news item!", error);
        setError("Error loading the news item.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


  return (
    <>
      {/* Top section with background image */}
      <div
        style={{
          height: '70vh',
          backgroundImage: `url(https://gamebackend.pythonanywhere.com${newsItem.image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        {/* Overlay gradient on top */}
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))',
            zIndex: 10,
          }}
        ></div>

        {/* Bottom gradient overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '250px',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))',
            zIndex: 10,
          }}
        ></div>
      </div>

      {/* Content section with background image */}
      <div
        style={{
          minHeight: '100vh',
          maxHeight: 'fit-content',
          position: 'relative',
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Top gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '300px',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
            zIndex: 1,
          }}
        ></div>

        {/* Blur effect for background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: 'blur(8px)',
            zIndex: 0,
          }}
        ></div>

        {/* Main content container */}
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '3rem', paddingBottom: '3rem' }}>
          <p style={{ color: '#b78846', fontSize: isMobile ? '0.9rem' : '1rem' }}>
            {new Date(newsItem.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <p className="mb-1 anim" style={{ fontSize: isMobile ? '2rem' : '5rem', color: '#b78846' }}>
            {newsItem.title}
          </p>
          <div className="decorative-line mb-5">
            <div className="decoration decoration-left"></div>
            <div className="decoration decoration-right"></div>
          </div>
          {/* News content */}
          <p className="fs-4 mt- text-secondary p-1" style={{ textAlign: 'justify' }}>
            {newsItem.content}
          </p>
        </div>

      </div>
    </>
  );
}

export default News;
