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
import Weapons from '../components/gameManagement/Weapons';
import EditWeapon from '../components/gameManagement/EditWeapon';
import AddWeapons from '../components/gameManagement/AddWeapons';
import Skills from '../components/gameManagement/Skills';
import EditSkills from '../components/gameManagement/EditSkills';
import NewsAndUpdates from '../components/gameManagement/NewsAndUpdates';
import AddSkills from '../components/gameManagement/AddSkills';
import EditNews from '../components/gameManagement/EditNews';
import AddNewsAndUpdates from '../components/gameManagement/AddNewsAndUpdates';
import Messages from '../components/userManagement/Messages';

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
              <Characters />
            </ProtectedRoute>
          }
        />
        <Route
          path="add-character"
          element={
            <ProtectedRoute>
              <AddCharacter />
            </ProtectedRoute>
          }
        /><Route
          path="edit-character"
          element={
            <ProtectedRoute>
              <EditCharacter />
            </ProtectedRoute>
          }
        />
        <Route
          path="weapons"
          element={
            <ProtectedRoute>
              <Weapons />
            </ProtectedRoute>
          }
        /><Route
          path="edit-weapons"
          element={
            <ProtectedRoute>
              <EditWeapon />
            </ProtectedRoute>
          }
        /><Route
          path="add-weapons"
          element={
            <ProtectedRoute>
              <AddWeapons />
            </ProtectedRoute>
          }
        /><Route
          path="skills"
          element={
            <ProtectedRoute>
              <Skills />
            </ProtectedRoute>
          }
        /><Route
          path="edit-skills"
          element={
            <ProtectedRoute>
              <EditSkills/>
            </ProtectedRoute>
          }
        /><Route
        path="add-skills"
        element={
          <ProtectedRoute>
            <AddSkills/>
          </ProtectedRoute>
        }
      />
        <Route
          path="news"
          element={
            <ProtectedRoute>
              <NewsAndUpdates/>
            </ProtectedRoute>
          }
        />
        <Route
          path="edit-news"
          element={
            <ProtectedRoute>
              <EditNews/>
            </ProtectedRoute>
          }
        />
        <Route
          path="add-news"
          element={
            <ProtectedRoute>
              <AddNewsAndUpdates/>
            </ProtectedRoute>
          }
        />
        <Route
          path="messages"
          element={
            <ProtectedRoute>
              <Messages/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default AdminRoutes;
