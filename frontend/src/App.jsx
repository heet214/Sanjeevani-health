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
import Intro1 from './pages/intro1';
import Spo2 from './components/spo2';
import Map from './components/Map';
import HeartVitals from './components/HeartVitals';
import Bpm from './pages/Bpm';
import Subscribe from './pages/Subscribe';
import Stress from './pages/Stress'  

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem('currentUser')) {
      setAuth(true);
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/profile" element={<Profile />} />
          <Route exact path="/report" element={<Report />} />
          <Route path="/report/:value" element={<Report />} />
          <Route path="/intro1" element={<Intro1 />} />
          <Route path="/spo2" element={<Spo2 />} />
          <Route path="/map" element={<Map />} />
          <Route path="/heart" element={<HeartVitals />} />
          <Route path="/bpm" element={<Bpm />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/stress" element={<Stress />} />
        </Routes>

        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
