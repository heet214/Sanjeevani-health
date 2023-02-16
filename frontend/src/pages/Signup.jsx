import React, { useState } from 'react';
import axios from 'axios';
import '../css/signup.css';
import logo from '../assets/colorLogo.png';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const handleRegister = () => {
    // e.preventDefault();
    axios
      .get('../user.json')
      .then((response) => {
        console.log(response.data);
        const userdata = response.data;
        console.log(userdata);
        sessionStorage.setItem('userJSON', JSON.stringify(userdata));
        console.log('done');
        const obj = {
          id: Math.floor(100000 + Math.random() * 900000),
          name,
          email,
          password,
          age,
        };

        console.log(obj);
        const file = sessionStorage.getItem('userJSON');
        file.push(obj);
        sessionStorage.setItem('userJSON', JSON.stringify(file));
        console.log(file);
      })
      .catch(function (error) {
        console.log(error);
      });

    window.location = '/login';
  };

  return (
    <div className="container">
      <div>
        <img className="logo" src={logo} />
      </div>

      <div className="register">
        <label className="label" htmlFor="name">
          Name
        </label>{' '}
        <br />
        <input
          type="text"
          name="name"
          className="inputFeild"
          id="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" className="label">
          Email
        </label>
        <br />
        <input
          type="email"
          className="inputFeild"
          id="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="*******"
          className="inputFeild"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="birthdate" className="label">
          Enter your age
        </label>
        <input
          type="number"
          name="age"
          id="age"
          className="inputFeild"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button className="button" onClick={handleRegister}>
        Register
      </button>
      <p className="loginText">
        Already Registered ?{' '}
        <span
          onClick={() => {
            window.location = '/login';
          }}>
          Login
        </span>
      </p>
    </div>
  );
};

export default Signup;
