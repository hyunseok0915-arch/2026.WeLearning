import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import UserHome from './pages/UserHome';
import AdminHome from './pages/AdminHome';
import './index.css';

function Navbar() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <h1 className="logo">오늘식당 {isAdmin && <span className="admin-badge">Admin</span>}</h1>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${!isAdmin ? 'active' : ''}`}>사용자</Link>
          <Link to="/admin" className={`nav-link ${isAdmin ? 'active' : ''}`}>관리자</Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/admin" element={<AdminHome />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
