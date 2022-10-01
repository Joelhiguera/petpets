import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import victoria1 from '../assets/victoria1.jpg';
import victoria2 from '../assets/victoria2.jpg';



function Victoria(){
  return(
    <>
      <Carousel className='bg-dark'>
      <Carousel.Item>
        <img
          className="carouselImg d-block w-100"
          src={victoria1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImg d-block w-100"
          src={victoria2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImg d-block w-100"
          src={victoria2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      <h1>Badger</h1>
    </>
  )
}

export default Victoria