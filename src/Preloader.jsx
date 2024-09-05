import React from 'react';
import wheel from './assets/logo-w.png';
import logotext from './assets/logo-t.png';

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="wheel-container">
        {/* Rotating wheel */}
        <img src={wheel} alt="wheel" className="rotating-wheel" />
        
        {/* Static logo text over the wheel */}
        <img src={logotext} alt="logo text" className="logo-text" />
      </div>
    </div>
  );
}

export default Preloader;
