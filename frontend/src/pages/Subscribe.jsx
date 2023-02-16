import React from 'react'
import {Button} from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout'
import subscribe from "../assets/subscribe.png"



function Subscribe() {
  
    const tokenHandler = (token) =>{
        console.log(token);
    }  


  return (
    <div >
      <div className='scrollable' style={{height:"300px"}}>
        <img src={subscribe} alt=""/>
      </div>
      <div style={{marginTop:"34rem",height: "51rem"}}>
      <StripeCheckout
        amount = {120000}
        shippingAddress
        token={tokenHandler}
        stripeKey='sk_test_51Ldup1SHiej8LA75DNvbVzsuA5n85eMyS8Z9bddpo0rTfxPeVYpeUxqmT2t4urEf8mCOwELjineVPIp7GnuilkxB006mPcrK55'
        currency='INR'
        >
        <Button style={{width:"71%"}}>Subscribe Now</Button>
    </StripeCheckout>
    </div>
    </div>
  );
}

export default Subscribe;
