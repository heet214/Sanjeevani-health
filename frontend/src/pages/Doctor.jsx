import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/doctor.css'
import {icon} from '../assets/icon.png'
import {icon1} from '../assets/icon1.png'
import {icon2} from '../assets/icon2.png'
import {icon3} from '../assets/icon3.png'
import { Image } from 'react-bootstrap';

function doctor() {
  return (
    <div className="container ">
    
    <Card style={{ width: '22rem', padding: '0px' , margin:'auto', marginTop:"7%",marginBottom:"9%" }}>
      <Card.Img className='doctorImage' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-r_VImHWRaA2c-ck8KAn4cp-JT5yruwW6Ew&usqp=CAU" />
      <Card.Body>
        <Card.Title id="doctorName" style={{margin: '0px' , textAlign : 'left' ,fontSize:'18px' , fontFamily:'Poppins', fontWeight:'bold'}}>Dr. Yuvraj Thakur</Card.Title>
        <Card.Text className='subtext' id="specialization" style={{textAlign:'left' , fontSize:'14px',fontFamily:'Poppins',color:'GrayText'}}>
          Cardiologist | Nanavati Hospital
        </Card.Text>
      </Card.Body>
    </Card>

    <div className="vital_container d-flex justify-content-around">
        <div className="vitals med shadow-sm">
          <Image src={icon} size="25x" />
        </div>
        <div className="vitals spo2 shadow-sm">
          <Image src={icon1} size="25x" />
        </div>
        <div className="vitals report shadow-sm">
          <Image src={icon2} size="25x" />
        </div>
        <div className="vitals virus shadow-sm">
          <Image src={icon3} size="25x" />
         </div>
      </div>

    <div className='aboutMe my-2' style={{marginLeft:"5%"}}>
      <p className='header'>About Me</p>

      <p className='subtext' id='aboutMeContent'>
      Dr. Eva Mars is the top most immunologists specialists in Crist Hospital in London, UK. She achived several awards for her wonderful contribution Read More...
      </p>

    </div>

    <div className='patientInfo' style={{marginLeft:"5%"}}>
        <p className='header'>Patient Information</p>
        <div className='subtext' >Patient's Name: Ferrucio Tuccine </div>
        <div className='subtext' >Gender: Male </div>

    </div>

    <button className='submitButton ' style={{color:"white"}}>Book Appointment</button>
</div>
  )
}

export default doctor











