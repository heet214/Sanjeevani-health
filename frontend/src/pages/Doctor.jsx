import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/doctor.css'

function doctor() {
  return (
    <div className="container">
    
    <Card style={{ width: '22rem', padding: '0px' , margin:'auto' }}>
      <Card.Img className='doctorImage' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-r_VImHWRaA2c-ck8KAn4cp-JT5yruwW6Ew&usqp=CAU" />
      <Card.Body>
        <Card.Title id="doctorName" style={{margin: '0px' , textAlign : 'left' ,fontSize:'18px' , fontFamily:'Poppins', fontWeight:'bold'}}>Dr. Yuvraj Thakur</Card.Title>
        <Card.Text className='subtext' id="specialization" style={{textAlign:'left' , fontSize:'14px',fontFamily:'Poppins',color:'GrayText'}}>
          Cardiologist | Nanavati Hospital
        </Card.Text>
      </Card.Body>
    </Card>

    <div className='aboutMe'>
      <h3>About Me</h3>

      <p className='subtext' id='aboutMeContent'>
      Dr. Eva Mars is the top most immunologists specialists in Crist Hospital in London, UK. She achived several awards for her wonderful contribution Read More...
      </p>

    </div>

    <div className='patientInfo'>
        <h3>Patient Information</h3>
        <div className='subtext' >Patient's Name: Ferrucio Tuccine </div>
        <div className='subtext' >Gender: Male </div>

    </div>

    <button className='submitButton'>Book Appointment</button>
</div>
  )
}

export default doctor











