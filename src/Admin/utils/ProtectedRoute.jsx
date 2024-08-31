import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = !!sessionStorage.getItem('admin_id'); // Example check

    return isAuthenticated ? children : <Navigate to="/notfound" replace />;
};

export default ProtectedRoute;