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
import Privacy from '../components/Policy/Privacy';
import Cookie from '../components/Policy/Cookie';
import Refund from '../components/Policy/Refund';
import Support from '../components/Policy/Support';
import Contact from '../components/Policy/Contact';
import AllNews from '../components/news/AllNews';
import News from '../components/news/News';
import Terms from '../components/Policy/Terms';
import ResendOTP from '../components/Authentication/ResendOtp';

function UserRoutes() {
  return (
    <div>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<UserLayout showHeaderAndFooter={true}><Home /></UserLayout>} />
        <Route path='login' element={<Authentication />} />
        <Route path='register' element={<Authentication insideRegister />} />
        <Route path='forgot-password' element={<ForgotPassword/>} />
        <Route path='verify-otp' element={<VerifyOtp/>} />
        <Route path='resend-otp' element={<ResendOTP/>} />
        <Route path='resetpassword/:uid/:token' element={<ResetPassword/>} />
        {/* Others */}
        {/* <Route path="about" element={<UserLayout showHeaderAndFooter={true}><About /></UserLayout>} /> */}
        <Route path="purchase" element={  <UserLayout showHeaderAndFooter={true}><ProtectedRoute> <Purchase/> </ProtectedRoute></UserLayout>}/>
        <Route path="all-news" element={  <UserLayout showHeaderAndFooter={true}><AllNews/> </UserLayout>}/>
        <Route path="news/:id" element={  <UserLayout showHeaderAndFooter={true}><ProtectedRoute> <News/> </ProtectedRoute></UserLayout>}/>
        <Route path='p' element={<Preloader/>} />
        <Route path='contact-us' element={<Contact/>} />
        {/* Policy */}
        <Route path='privacy-policy' element={<Privacy/>} />
        <Route path='cookie-policy' element={<Cookie/>} />
        <Route path='refund-policy' element={<Refund/>} />
        <Route path='support' element={<Support/>} />
        <Route path='terms' element={<Terms/>} />

      </Routes>
    </div>
  );
}

export default UserRoutes;
