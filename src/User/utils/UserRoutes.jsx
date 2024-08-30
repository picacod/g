import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import UserLogin from '../components/Authentication/UserLogin';
// import UserRegister from '../components/Authentication/UserRegister';
import About from '../pages/About';
import UserLayout from '../common/UserLayout';
import Home from '../pages/Home';
import Authentication from '../pages/Authentication';
import Preloader from '../../Preloader';

function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path="home" element={<UserLayout showHeaderAndFooter={true}><Home /></UserLayout>} />
        {/* <Route path="login" element={<UserLogin />} />
        <Route path="register" element={<UserRegister />} /> */}
        <Route path='login' element={<Authentication />} />
        <Route path='register' element={<Authentication insideRegister />} />
        <Route path="about" element={<UserLayout showHeaderAndFooter={true}><About /></UserLayout>} />
        <Route path='p' element={<Preloader/>} />

      </Routes>
    </div>
  );
}

export default UserRoutes;
