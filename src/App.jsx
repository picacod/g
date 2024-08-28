
import AdminRoutes from './Admin/utils/AdminRoutes';
import './App.css'
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import UserRoutes from './User/utils/UserRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/admin/*" element={<AdminRoutes/>} />
          <Route path="/*" element={<UserRoutes/>} />
          {/* <Route path="/notfound" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
