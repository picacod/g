import React from 'react'
import '../styles/Purchase.css'
import hanuman from '../../assets/hanuman.png'
import ram from '../../assets/04.png'
import img  from '../../assets/ram.jpeg'
import logo  from '../../assets/logo.png'


function Overview() {
  return (
  <>
   <div className="banner">
      <div className="slider" style={{ '--quantity': 6 }}>
        <div className="item " style={{ '--position': 1,backgroundColor:'#171717' }}>
          <a href="https://www.google.com">
            <img src={hanuman} alt="" />
          </a>
        </div>
        <div className="item " style={{ '--position': 2,backgroundColor:'#171717' }}>
          <a href="https://www.google.com">
            <img src={ram} alt="" />
          </a>
        </div>
        <div className="item" style={{ '--position': 3,backgroundColor:'#171717' }}>
          <img src={img} alt="" />
        </div>
        <div className="item " style={{ '--position': 4,backgroundColor:'#171717' }}>
          <a href="https://www.google.com">
            <img src={hanuman} alt="" />
          </a>
        </div>
        <div className="item " style={{ '--position': 5,backgroundColor:'#171717' }}>
          <a href="https://www.google.com">
            <img src={ram} alt="" />
          </a>
        </div>
        <div className="item" style={{ '--position': 6,backgroundColor:'#171717' }}>
          <img src={img} alt="" />
        </div>
      
      </div>
      <div className="content">
       <img src={logo} alt="" />
        <div className="author">
<button className='btn btn-outline-warning'>Purchase</button>         
        </div>
        <div className="model"></div>
      </div>
    </div>
  
  </>
  )
}

export default Overview