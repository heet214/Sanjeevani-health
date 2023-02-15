import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Doctor from './pages/Doctor';
import Report from './pages/Report';
import Notifications from './pages/Notifications';
import Profile from './components/Profile';

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      setAuth(true);
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/report" element={<Report />} />
        </Routes>

        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
