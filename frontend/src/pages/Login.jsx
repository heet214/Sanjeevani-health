import React, { useState } from 'react';
import '../css/signup.css';
import logo from '../assets/colorLogo.png';
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

    const userfile = JSON.parse(sessionStorage.getItem('userJSON'));
    console.log('userfile', userfile);
    const user = userfile.filter((user) => {
      if (user.email == email && user.password == password) {return user}else{alert('NO user Found')}
    });

    if (user) {
      sessionStorage.setItem('cheatUser', JSON.stringify(user));
    }
    window.location = '/';
  };

  return (
    <div className="login_container">
      <div className="login_form">
        <div>
          <img className="logo" src={logo} />
        </div>
        <label className="loginText" htmlFor="email">
          Enter Email
        </label>
        <input
          className="inputFeild"
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className="loginText" htmlFor="Password">
          Enter Password
        </label>
        <input
          className="inputFeild"
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
