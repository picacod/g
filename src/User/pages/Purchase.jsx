import React from 'react';
import darkbg from '../../assets/bg-2.jpg';
import han from '../../assets/hanuman.png';

function Purchase() {
  return (
    <div
      style={{
        backgroundImage: `url(${darkbg})`,
        minHeight: '100vh',
        maxHeight: 'fit-content',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative' // Make it relative for the overlay
      }}
      className='vh-100 d-flex align-items-center justify-content-center'>

      {/* Dark gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9))',
        zIndex: 1
      }} />

      {/* Content container with Hanuman image background */}
      <div style={{
        zIndex: 2,
        color: '#fff',
        backgroundImage: `url(${han})`,
        backgroundSize: 'contain',  // Ensures Hanuman image fits the container
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',  // Centers Hanuman image in container
        height:'80vh',
        padding: '2rem',
        borderRadius: '10px', // Optional styling for rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Adding shadow effect to container
      }} className='container'>

        <div className='row h-100'>
          <div className='col-lg-9'>
            <h1 className='fs-1 mb-2'>Lorem ipsum dolor</h1>
            <div style={{ height: "1px", backgroundColor: 'yellow' ,width:'25%'}}></div>
            <p className='mt-3 fs-5 w-50'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt illum odio facilis laborum at, nihil a deleniti provident, perferendis maiores esse error veritatis optio nesciunt quod aut nisi hic sint? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt illum odio facilis laborum at, nihil a deleniti provident, perferendis maiores esse error veritatis optio nesciunt quod aut nisi hic sint?
            </p>
            <div className='h-50 w-100 ' style={{  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))',borderStyle:'double'}}>

            </div>
          </div>
          <div className='col-lg-3'>
            <div className='h-100 w-100 ' style={{  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))'}}> 

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Purchase;
