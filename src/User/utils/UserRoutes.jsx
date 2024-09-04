import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import UserLogin from '../components/Authentication/UserLogin';
// import UserRegister from '../components/Authentication/UserRegister';
import About from '../pages/About';
import UserLayout from '../common/UserLayout';
import Home from '../pages/Home';
import Authentication from '../pages/Authentication';
import Preloader from '../../Preloader';
import ForgotPassword from '../components/Authentication/ForgotPassword';
import VerifyOtp from '../components/Authentication/VerifyOtp';
import ResetPassword from '../components/Authentication/ResetPassword';
import Purchase from '../pages/Purchase';
// import Overview from '../pages/Overview';
import ProtectedRoute from './ProtectedRoute';

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
        {/* <Route path="overview" element={ <ProtectedRoute> <Overview/> </ProtectedRoute> }/> */}
        <Route path="purchase" element={ <ProtectedRoute> <Purchase/> </ProtectedRoute> }/>
        {/* <Route path='overview' element={<Overview/>} />
        <Route path='purchase' element={<Purchase/>} /> */}
        <Route path='p' element={<Preloader/>} />
        <Route path='forgot-password' element={<ForgotPassword/>} />
        <Route path='verify-otp' element={<VerifyOtp/>} />
        <Route path='resetpassword/:uid/:token' element={<ResetPassword/>} />
      </Routes>
    </div>
  );
}

export default UserRoutes;
