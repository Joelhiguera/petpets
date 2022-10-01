import React from 'react';
import petrie1 from '../assets/petrie1.jpg'
import petrie2 from '../assets/petrie2.jpg'
import petrie3 from '../assets/petrie3.jpg'
import Carousel from 'react-bootstrap/Carousel';



function Petrie(){
  return(
    <>
    <Carousel className='bg-dark'>
      <Carousel.Item>
        <img
          className="carouselImg d-block w-100"
          src={petrie1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImg d-block w-100"
          src={petrie2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImg d-block w-100"
          src={petrie3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      <h1>Petrie</h1>
    </>
  )
}

export default Petrie