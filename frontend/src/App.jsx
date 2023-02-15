import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <Route path="/dashboard/:id" element={<Dashboard />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
        </Routes>

        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
