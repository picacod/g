import React from 'react'
import Header from '../../common/Header'
import HomeContent from './HomeContent'

function UserHome() {
  return (
    <div style={{
      backgroundImage: 'url("https://wallpapercave.com/wp/wp10596166.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh'
    }}>
      <Header />
      <div className="container h-100">
       
        <div className='h-100 d-flex flex-column align-items-center justify-content-center  text-light'>
          <h1 className='mb-3' style={{ fontSize: '5rem',fontFamily:'fantasy',color:'yellow' }}>Ancient Shadows</h1>
          <h1 className='mb-4 fw-bold' style={{ fontSize: '4rem' }}>Now available for PS5 and Xbox Series X|S</h1>
          <h3>Experience entertainment blockbusters, Grand Theft Auto V and GTA Online.</h3>
          <div className='d-flex align-items-center justify-content-start gap-4 mt-4'>
            <button className='btn btn-lg btn-outline-light rounded-0'>Watch the trailer</button>
            <button className='btn btn-lg btn-outline-light rounded-0'>Buy Now</button>
          </div>
        </div>
      </div>
      <HomeContent/>
    </div>
  )
}

export default UserHome
