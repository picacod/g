import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import UsersList from '../components/userManagement/UsersList';
import BookedUsers from '../components/userManagement/BookedUsers';
import AdminLogin from '../components/Authentication/AdminLogin';
import ProtectedRoute from './ProtectedRoute';
import Characters from '../components/gameManagement/Characters';
import AddCharacter from '../components/gameManagement/AddCharacter';
import EditCharacter from '../components/gameManagement/EditCharacter';

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
        <Route
          path="character"
          element={
            <ProtectedRoute>
              <Characters/>
            </ProtectedRoute>
          }
        />
        <Route
          path="add-character"
          element={
            <ProtectedRoute>
             <AddCharacter/>
            </ProtectedRoute>
          }
        /><Route
        path="edit-character"
        element={
          <ProtectedRoute>
            <EditCharacter/>
          </ProtectedRoute>
        }
      />
      </Routes>
    </div>
  );
}

export default AdminRoutes;
