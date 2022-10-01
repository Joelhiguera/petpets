import React from 'react';
import petrie1 from '../assets/petrie1.jpg'
import petrie2 from '../assets/petrie2.jpg'
import petrie3 from '../assets/petrie3.jpg'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';



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
     
    <Card className='mx-auto' style={{fontSize: "1.5rem", width: '60rem', marginBottom: '10%' }}>
      <Card.Body className='p-4'>
        <Card.Title className='mb-5' style={{fontSize: "3.0rem"}}>Petrie</Card.Title>
        Pit Bull Terrier Mix • UT
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='p-4'>Young • Male • Medium • Black / White / Cream</ListGroup.Item>
        <ListGroup.Item className='p-4'>
          <Card.Title style={{fontSize: "1.7rem"}}>About</Card.Title>
          Vaccinations are up to date.
        </ListGroup.Item>
        <ListGroup.Item className='p-4'>
          <Card.Title style={{fontSize: "1.7rem"}}>Meet Petrie</Card.Title>
          Petrie is looking for a forever home!
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

export default Petrie