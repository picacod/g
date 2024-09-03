import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = !!sessionStorage.getItem('user_id'); // Example check

    return isAuthenticated ? children : <Navigate to="/notfound" replace />;
};

export default ProtectedRoute;