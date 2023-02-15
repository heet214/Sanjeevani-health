import React from 'react';
import '../App.css';
import { Image } from 'react-bootstrap';
import logo1 from '../assets/logo.png';
import profile2 from '../assets/profile.jpg';

export default function HealthCard() {
  return (
<<<<<<< HEAD
    <div>
      <div
        className="card health-card rounded-5 position-absolute top-0 start-50 translate-middle-x my-5 shadow p-3 mb-5"
        style={{ backgroundColor: '#1c6ba4' }}>
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
=======
    <div >

        <div className="card health-card rounded-5 my-5 mx-auto shadow p-3 mb-5" style={{backgroundColor:"#1c6ba4", marginLeft:"-7rem"}}  >
            <div><Image className="mx-2 rounded " src={logo1} style={{height:"35px",width:"140px",marginRight:"30%"}}/>
            
                <Image className="mx-auto" src={profile2} style={{height:"55px",width:"55px",borderRadius:"50%"}} /></div>
        <div className="card-body my-2">
            <h5 className="card-title">Yuvraj Thakur</h5>
            <p className="card-text">Card Number....</p>
            
>>>>>>> b08e510d11d3ba3a9a6c4ab72c0040eb97b70aea
        </div>
        <div className="card-body my-2">
          <h5 className="card-title">Yuvraj Thakur</h5>
          <p className="card-text">Card Number....</p>
        </div>
      </div>
    </div>
  );
}
