import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import UsersList from '../components/userManagement/UsersList';
import BookedUsers from '../components/userManagement/BookedUsers';
import AdminLogin from '../components/Authentication/AdminLogin';
import ProtectedRoute from './ProtectedRoute';

function AdminRoutes() {
  return (
    <div>
      <Routes>
        {/* Public Route */}
        <Route path="admin-login" element={<AdminLogin />} />

        {/* Protected Routes */}
        <Route
          path="overview"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="all-users"
          element={
            <ProtectedRoute>
              <UsersList />
            </ProtectedRoute>
          }
        />
        <Route
          path="booked-users"
          element={
            <ProtectedRoute>
              <BookedUsers />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default AdminRoutes;
