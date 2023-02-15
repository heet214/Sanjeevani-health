import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const handleLogin = () => {
    axios
      .post('http://localhost:8000/api/users/login', {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem(
          'currentUser',
          JSON.stringify(response.data.token)
        );

        console.log(response.data.token);
        setToken(response.data.token);

        // window.location = `/dashboard/${}`;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="login_form">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
