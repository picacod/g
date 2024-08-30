
import AdminRoutes from './Admin/utils/AdminRoutes';
import './App.css'
import { Route, Routes,Navigate } from 'react-router-dom';
import UserRoutes from './User/utils/UserRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './NotFound';

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/admin/*" element={<AdminRoutes/>} />
          <Route path="/*" element={<UserRoutes/>} />
          <Route path="/notfound" element={<NotFound/>} />
        </Routes>
    </>
  )
}

export default App
