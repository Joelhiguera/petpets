import React from 'react';
import dog1  from '../../assets/dog1.jpg'
import dog2  from '../../assets/dog2.jpg'
import dog3  from '../../assets/dog3.jpg'
import dog4  from '../../assets/dog4.jpg'



function FeaturedPets() {
  return(
    <div>
    <h2 style={{textAlign: "center"}}>Pets Available for Adoption</h2>
    <div className='petContainer'>
      
        
        
          <div className='card'>
            <img className='petImg' src={dog1} alt='dog' />
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
            </div>
          

        
            <div className='card'>
              <img className='petImg' src={dog4} alt='dog' />
                <div className='cardContainer'>
                  <h3>Dog 4</h3>
                </div>
            </div>
       
          
          
        

        </div>

    
    </div>
    
  )
}

export default FeaturedPets