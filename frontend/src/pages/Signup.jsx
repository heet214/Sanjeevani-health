import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/users/register', {
        email,
        password,
        name,
        birthdate,
      })
      .then((response) => {
        console.log(response.data);
        window.location = '/login';
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="register">
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Enter your email address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="birthdate">Enter your date of birth</label>
        <input
          type="date"
          name="birthdate"
          id="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Signup;
