// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx';
// import './index.css';
// import { BrowserRouter } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <GoogleOAuthProvider clientId="18944469687-50mb6tlq668qca1t28118odma2obd531.apps.googleusercontent.com">

//     <BrowserRouter>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </BrowserRouter>
//   </GoogleOAuthProvider>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="736263222806-ge18j4uubciif5rvlmjnbgdtmltl23tu.apps.googleusercontent.com">
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </GoogleOAuthProvider>
);