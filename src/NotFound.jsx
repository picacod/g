import React from 'react'
import {  useNavigate } from 'react-router-dom'


function NotFound() {

  const navigate = useNavigate()

  const gotoHome = () =>{
    navigate('/home')
  }
  
  return (
    <div className='text-center text-dark w-100 vh-100 d-flex align-items-center justify-content-center'>
      <div>
        <h1 className='display-1'>404</h1>
        <p className='fw-bold'>Page Not Found</p>
        <button onClick={gotoHome} className='btn btn-outline-dark mt-4'>Go Home</button>
      </div>
    </div>
  )
}

export default NotFound