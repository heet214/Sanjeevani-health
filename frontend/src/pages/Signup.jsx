import React, { useState } from 'react';
import axios from 'axios';
import '../css/signup.css'
import logo from '../assets/colorLogo.png';

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
      <div>
        <img className='logo' src={logo} />
      </div>

      <div className="register" >
        <label className='label' htmlFor="name">Name</label> <br />
        <input
          type="text"
          name="name"
          className='inputFeild'
          id="name"
          placeholder='Enter Your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> 
        <label htmlFor="email" className='label'>Email</label><br/>
        <input
          type="email"
          className='inputFeild'
          id="email"
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className='label'>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder='*******'
          className='inputFeild'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="birthdate" className='label'>Date of birth</label>
        <input
          type="date"
          name="birthdate"
          id="birthdate"
          className='inputFeild'
          placeholder='dd/mm/yyyy'
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </div>
      <button className='button' onClick={handleRegister}>Register</button>
      <p className='loginText'>Already Registered ? <strong>Login</strong> </p>
    </div>
  );
};

export default Signup;
