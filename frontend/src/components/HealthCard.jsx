import React from 'react';
import '../App.css';
import { Image } from 'react-bootstrap';
import logo1 from '../assets/logo.png';
import profile2 from '../assets/profile.jpg';

export default function HealthCard() {
  return (
    <div>
      <div
        className="card health-card rounded-5 my-5 mx-auto shadow p-3 mb-5"
        style={{ backgroundColor: '#1c6ba4', marginLeft: '-7rem' }}>
        <div>
          <Image
            className="mx-2 rounded "
            src={logo1}
            style={{ height: '35px', width: '140px', marginRight: '30%' }}
          />

          <Image
            className="mx-auto"
            src={profile2}
            style={{ height: '55px', width: '55px', borderRadius: '50%' }}
          />
        </div>
        <div className="card-body my-2">
          <h5 className="card-title">Yuvraj Thakur</h5>
          <p className="card-text">Card Number....</p>
        </div>
        <div className="card-body my-2">
          <h5 className="card-title">Yuvraj Thakur</h5>
          <p className="card-text">Card Number....</p>
        </div>
      </div>
    </div>
  );
}
