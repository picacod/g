import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserLogin from '../components/Authentication/UserLogin';
import UserRegister from '../components/Authentication/UserRegister';
import About from '../pages/About';
import UserLayout from '../common/UserLayout';
import Home from '../pages/Home';

function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path="home" element={<UserLayout showHeaderAndFooter={true}><Home /></UserLayout>} />
        <Route path="login" element={<UserLogin />} />
        <Route path="register" element={<UserRegister />} />
        <Route path="about" element={<UserLayout showHeaderAndFooter={true}><About /></UserLayout>} />
      </Routes>
    </div>
  );
}

export default UserRoutes;
