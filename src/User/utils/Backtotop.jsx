import React, { useState, useEffect } from 'react';
import arr from '../../assets/arrow.png';
import bow from '../../assets/bow1.png'; // Path to your gold bow image

function Backtotop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showBow, setShowBow] = useState(false); // State to track image
  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as per your mobile view
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
}, []);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      if (window.scrollY === 0) {
        setShowBow(false); // Reset to arrow image when scrolled to top
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll the page back to the top with bow release effect
  const scrollToTop = () => {
    setIsAnimating(true);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsAnimating(false);
    }, 200); // Duration should match the animation duration
    setShowBow(true);
  };

  // Keyframes for bounce animation
  const bounceAnimation = `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-20px);
      }
      60% {
        transform: translateY(-30px);
      }
    }
  `;

  // Keyframes for bow release animation
  const bowReleaseAnimation = `
    @keyframes bowRelease {
      0% {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
      50% {
        transform: translateY(-20px) scale(1.5);
        opacity: 1;
      }
      100% {
        transform: translateY(-30px) scale(0.5);
        opacity: 0;
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
            bottom: '0px',
            right: '0px',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '50%',
            padding: '10px',
            zIndex: 1000,
            cursor: 'pointer',
            animation: `bounce 3s infinite`,
            overflow: 'hidden', // Ensure the bow image stays within button bounds
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              bottom: '0',
              right: '0',
              width: isMobile? '80px':'160px', // Adjust size as needed
              height: '200px',
              display: 'flex',
              alignItems: 'end',
              justifyContent:isMobile ? 'end':'center',
              animation: isAnimating ? 'bowRelease 1s forwards' : 'none',
              zIndex: 2000,
            }}
          >
            <img width={80} src={showBow ? bow : arr} alt="arrow" className='img-fluid'/>
            
            {isAnimating && (
              <img
                src={bow}
                alt="gold bow"
                style={{
                  position: 'absolute',
                  bottom: '0',
                  right:isMobile ? '16px':'40px', // Adjust positioning as needed
                  width: isMobile?'50px':'80px', // Adjust size as needed
                  height: '150px', // Adjust size as needed
                }}
              />
            )}
          </div>
          <style>{bounceAnimation}</style>
          <style>{bowReleaseAnimation}</style>
        </button>
      )}
    </div>
  );
}

export default Backtotop;