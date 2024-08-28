import React from 'react'
import { Route, Routes } from 'react-router-dom';
import UserHome from '../components/Home/UserHome';
import UserLogin from '../components/Authentication/UserLogin';
import UserRegister from '../components/Authentication/UserRegister';

function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path="home" element={<UserHome/>} />
        <Route path="login" element={<UserLogin/>} />
        <Route path="register" element={<UserRegister/>} />
      </Routes>
    </div>
  )
}

export default UserRoutes