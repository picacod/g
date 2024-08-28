import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';

function AdminRoutes() {
  return (
    <div>
      <Routes>
        <Route path="overview" element={<AdminDashboard/>} />     
      </Routes>
    </div>
  )
}

export default AdminRoutes