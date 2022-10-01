import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
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
      
    <Card className='mx-auto' style={{fontSize: "1.5rem", width: '60rem', marginBottom: '10%' }}>
      <Card.Body className='p-4'>
        <Card.Title className='mb-5' style={{fontSize: "3.0rem"}}>Victoria</Card.Title>
        German Shepherd Dog • UT
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='p-4'>Young • Female • Small • Black, Yellow, Tan / Blonde / Fawn</ListGroup.Item>
        <ListGroup.Item className='p-4'>
          <Card.Title style={{fontSize: "1.7rem"}}>About</Card.Title>
          Vaccinations are up to date.
        </ListGroup.Item>
        <ListGroup.Item className='p-4'>
          <Card.Title style={{fontSize: "1.7rem"}}>Meet Victoria</Card.Title>
          Victoria is looking for a forever home!
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Adoption-Application</Card.Link>
        <Card.Link href="#">Favorite</Card.Link>
      </Card.Body>
    </Card>
    
    </>
  )
}

export default Victoria