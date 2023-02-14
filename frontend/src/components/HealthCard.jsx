import React from 'react'
import "../App.css"
import { Image } from "react-bootstrap";


export default function HealthCard() {
  return (
    <div className=''>

        <div className="card health-card rounded-5 position-absolute top-0 start-50 translate-middle-x my-5"  >
            <Image className="mx-2" src="../assets/logo.png" />

                <Image className="mx-auto" src="../assets/profile.jpg" />
        <div className="card-body my-2">
            <h5 className="card-title">Yuvraj Thakur</h5>
            <p className="card-text">Card Number....</p>
            
        </div>
        </div>
    </div>
  )
}
