import React, { useState, useEffect } from 'react';
import arr from '../../assets/arrow.png';

function Backtotop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll the page back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Keyframes for bounce animation
  const bounceAnimation = `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
  `;

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '50%',
            padding: '10px',
            zIndex: 1000,
            cursor: 'pointer',
            animation: 'bounce 2s infinite'
          }}
        >
          <img width={70} src={arr} alt="arrow" />
          <style>{bounceAnimation}</style>
        </button>
      )}
    </div>
  );
}

export default Backtotop;
