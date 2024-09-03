
import AdminRoutes from './Admin/utils/AdminRoutes';
import './App.css'
import { Route, Routes,Navigate } from 'react-router-dom';
import UserRoutes from './User/utils/UserRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './NotFound';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/admin/*" element={<AdminRoutes/>} />
          <Route path="/*" element={<UserRoutes/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </div>
  )
}

export default App
