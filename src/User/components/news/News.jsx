import React, { useEffect ,useState} from 'react';
import bg from '../../../assets/bg-2.jpg';

function News() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <>
      {/* Top section with background image */}
      <div
        style={{
          height: '70vh',
          backgroundImage: `url(https://img.freepik.com/free-photo/person-praying-inside-mosque-focus-architecture_1258-289387.jpg?t=st=1725854748~exp=1725858348~hmac=9c1a055867174d98e7cd02a21bf1da2b332f4fb9ed2d46f3eeec80610c8856e3&w=1480)`,
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
          <p style={{ color: '#b78846' , fontSize: isMobile?'0.9rem':'1rem',}}>SEPTEMBER 09, 2024</p>
          <p className="mb-1 anim" style={{ fontSize: isMobile?'2rem':'5rem', color: '#b78846' }}>Jatayu Demigod in Hindu Epic</p>
          <div className="decorative-line mb-5">
            <div className="decoration decoration-left"></div>
            <div className="decoration decoration-right"></div>
          </div>
          {/* Paragraphs for the article */}
          <p className="fs-4 mt- text-secondary p-1" style={{ textAlign: 'justify' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nemo, hic neque quae ab consequatur saepe nulla sunt dolorum placeat est facilis commodi natus dolores. Pariatur vitae dicta vero aperiam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis minus, atque quas aut omnis sequi vel ipsam impedit non ipsa adipisci voluptates beatae. Dolorum amet quod voluptatem odit nam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis minus, atque quas aut omnis sequi vel ipsam impedit non ipsa adipisci voluptates beatae. Dolorum amet quod voluptatem odit nam.
          </p>
          <p className="fs-4 text-secondary" style={{ textAlign: 'justify' }}>
            At blanditiis minus, atque quas aut omnis sequi vel ipsam impedit non ipsa adipisci voluptates beatae. Dolorum amet quod voluptatem odit nam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ducimus modi quia necessitatibus quasi dicta dolore iure deleniti quae atque omnis inventore eos corporis, optio ex iste unde. Quod, eligendi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis minus, atque quas aut omnis sequi vel ipsam impedit non ipsa adipisci voluptates beatae. Dolorum amet quod voluptatem odit nam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis minus, atque quas aut omnis sequi vel ipsam impedit non ipsa adipisci voluptates beatae. Dolorum amet quod voluptatem odit nam.
          </p>
        </div>
      </div>
    </>
  );
}

export default News;