import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // await axios
    //   .post('http://localhost:8000/api/users/login', {
    //     email,
    //     password,
    //   })
    //   .then((response) => {
    //     const token = JSON.stringify(response.data.token);
    //     console.log(response.data);
    //     localStorage.setItem(
    //       'currentUser',
    //       JSON.stringify(response.data.token)
    //     );

    //     console.log(token, 'token');

    //     window.location = `/`;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    console.log(email, password);

    const userfile = JSON.parse(localStorage.getItem('userJSON'));
    console.log(userfile);
    const user = userfile.filter((user) => {
      if (user.email == email && user.password == password) return user;
    });

    if (user) {
      localStorage.setItem('cheatUser', JSON.stringify(user));
      window.location = '/';
    }
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
