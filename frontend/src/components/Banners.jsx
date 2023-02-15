import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/consultation.jpeg'
import img2 from '../assets/insurance.jpeg'
import img3 from '../assets/subscription.jpeg'


export default function Banners() {
  return (
<<<<<<< HEAD
    <Carousel className='my-5' controls={false}>
=======
    <Carousel className='my-5' indicators={false} controls = {false}>
>>>>>>> bcafcc27f9055e78a13acdb13085d637629ba52b
    <Carousel.Item interval={4000}>
      <img
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={4000}>
      <img
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  )
}
