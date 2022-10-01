import React from 'react';
import ollie1 from '../assets/ollie1.jpg';
import ollie2 from '../assets/ollie2.jpg';
import ollie3 from '../assets/ollie3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';



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
      
    <Card className='mx-auto' style={{fontSize: "1.5rem", width: '60rem', marginBottom: '10%' }}>
      <Card.Body className='p-4'>
        <Card.Title className='mb-5' style={{fontSize: "3.0rem"}}>Ollie</Card.Title>
        Shih Tzu & Spaniel Mix • UT
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='p-4'>Adult • Male • Medium • Tricolor brown / black / white</ListGroup.Item>
        <ListGroup.Item className='p-4'>
          <Card.Title style={{fontSize: "1.7rem"}}>About</Card.Title>
          Vaccinations are up to date.
        </ListGroup.Item>
        <ListGroup.Item className='p-4'>
          <Card.Title style={{fontSize: "1.7rem"}}>Meet Ollie</Card.Title>
          Ollie looks to be an oversized Shih Tzu and is 6 years old. He has a very sweet temperment and loves water and rain. He came with his 2 buddies Chubba and Polar who would like to stay together as much as possible.
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

export default Ollie