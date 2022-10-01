import React from 'react';
import ollie1 from '../assets/ollie1.jpg';
import ollie2 from '../assets/ollie2.jpg';
import ollie3 from '../assets/ollie3.jpg';
import Carousel from 'react-bootstrap/Carousel';



function Ollie(){
  return(
    <>
    <Carousel className='bg-dark'>
      <Carousel.Item>
        <img
          className="carouselImg d-block w-100"
          src={ollie1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImg d-block w-100"
          src={ollie2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImg d-block w-100"
          src={ollie3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      <h1>Ollie</h1>
    </>
  )
}

export default Ollie