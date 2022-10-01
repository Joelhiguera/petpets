import React from 'react';
import ollie1 from '../../assets/ollie1.jpg'
import victoria1 from '../../assets/victoria1.jpg'
import petrie1 from '../../assets/petrie1.jpg'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';



function FeaturedPets(props) {
  return(
    <div>
    <h2 style={{textAlign: "center", marginTop: '4%'}}>Pets Available for Adoption</h2>
    <div className='petContainer'>
      
        <Link className='featuredPet' style={{marginRight: "2%"}} to={'./ollie'}>   
          <Card style={{borderRadius: '5%', width: '18rem' }}>
            <Card.Img style={{borderRadius: '5%', height: '254px', objectFit: 'cover' }} variant="top" src={ollie1} />
          <Card.Body>
            <Card.Title style={{color: '#468189', fontSize:"30px", textAlign: "center"}}>Ollie</Card.Title>        
          </Card.Body>
          </Card>
        </Link>

        <Link className='featuredPet' style={{marginRight: "2%"}} to={'./victoria'}>   
          <Card style={{borderRadius: '5%', width: '18rem' }}>
            <Card.Img style={{borderRadius: '5%', height: '254px', objectFit: 'cover' }} variant="top" src={victoria1} />
          <Card.Body>
            <Card.Title style={{color: '#468189', fontSize:"30px", textAlign: "center"}}>Victoria</Card.Title>        
          </Card.Body>
          </Card>
        </Link>

        <Link className='featuredPet' to={'./petrie'}>   
          <Card style={{borderRadius: '5%', width: '18rem' }}>
            <Card.Img style={{borderRadius: '5%', height: '254px', objectFit: 'cover' }} variant="top" src={petrie1} />
          <Card.Body>
            <Card.Title style={{color: '#468189', fontSize:"30px", textAlign: "center"}}>Petrie</Card.Title>        
          </Card.Body>
          </Card>
        </Link>
        
{/*          
          <div className='card'>
            <img className='petImg' src={dog6} alt='dog' /> 
              <div className='cardContainer'>
                <h3>Dog 1</h3>
              </div>  
          </div>
              
            <div className='card'>
              <img className='petImg' src={dog2} alt='dog' />
                <div className='cardContainer'>
                  <h3>Dog 2</h3>
                </div>
            </div>
    
            <div className='card'>
              <img className='petImg' src={dog3} alt='dog' />
                <div className='cardContainer'>
                  <h3>Dog 3</h3>
                </div>
            </div> */}
          

        
            
       
          
          
        

        </div>

    
    </div>
    
  )
}

export default FeaturedPets