
import AdminRoutes from './Admin/utils/AdminRoutes';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserRoutes from './User/utils/UserRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './NotFound';

function App() {

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/*" element={<UserRoutes />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
