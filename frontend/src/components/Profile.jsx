import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import {FiLogOut} from 'react-icons/fi';
import {BiArrowBack} from 'react-icons/bi'

export default function Profile() {
  return (
    <div>
     <div className="vh-100" style={{ backgroundColor: '#eee',marginTop:"-2rem" }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">

          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px',height:"50rem" }}>
            <div className="backBtn d-flex flex-start"  ><MDBBtn  style={{ borderRadius: '40%',}}>
                    <BiArrowBack size={25}/>
                </MDBBtn>
                </div>

              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Deshna Gandhi</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  @Customer <span className="mx-2">|</span> <a href="/">Sanjeevani.com</a>
                </MDBCardText><br />
                
                <MDBBtn rounded size="lg" className='my-2 profile-btn'>
                    Account Setting
                </MDBBtn>
                <MDBBtn rounded size="lg" className='my-2 profile-btn' >
                  Privacy Policy
                </MDBBtn>
                <MDBBtn rounded size="lg" className='my-2 profile-btn'>
                 Subscription
                </MDBBtn>
                <MDBBtn rounded size="lg" className='my-2 profile-btn'>
                 Payment Setting
                </MDBBtn>
                <div className="text-center mt-5 mb-2">
                  <FiLogOut size={30}/><br /> Log Out
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </div>
  )
}
