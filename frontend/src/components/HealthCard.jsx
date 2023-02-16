import React, { useEffect, useState } from 'react';
import '../App.css';
import { Image } from 'react-bootstrap';
import logo1 from '../assets/logo.png';
import profile2 from '../assets/profile.jpg';
import axios from 'axios';

export default function HealthCard() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  useEffect(() => {
    //   const token = localStorage.getItem('currentUser');
    //   console.log('token', token);
    //   let api_token = 'Bearer' + ' ' + token.toString();
    //   console.log('api_token', api_token);
    //   axios
    //     .get(
    //       'http://localhost:8000/api/vitals/',

    //       {
    //         headers: {
    //           'Content-Type': 'application/json',
    //           Authorization: api_token,
    //         },
    //       }
    //     )
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });

    if (!sessionStorage.getItem('cheatUser'))
      return (window.location = '/login');
    const user = JSON.parse(sessionStorage.getItem('cheatUser'));
    console.log('CHEAT USER ', user);

    setName(user[0].name);
    setId(user[0].id);
  }, []);

  return (
    <div style={{ marginLeft: '6%' }}>
      <div
        className="card health-card rounded-5 shadow mx-auto p-3 mb-5"
        style={{ backgroundColor: '#1c6ba4', width: '95%', marginTop: '2rem' }}>
        <div>
          <Image
            className="mx-2 rounded"
            src={logo1}
            style={{ height: '30px', width: '140px' }}
          />

          <Image
            className="mx-auto float-right"
            src={profile2}
            style={{ height: '55px', width: '55px', borderRadius: '50%' }}
          />
        </div>
        <div className="card-body my-2">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{id}</p>
        </div>
      </div>
    </div>
  );
}
