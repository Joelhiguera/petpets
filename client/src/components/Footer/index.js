import React from 'react'
import Card from 'react-bootstrap/Card'


function Footer() {
  return (
    <Card style={
      {backgroundColor: "#468189", 
       position: 'fixed',
       bottom: '0'
    }} className='footer'>
    <Card.Footer style={{backgroundColor: "#468189", height: '60px', color:'white'}}>Follow our social media</Card.Footer>
  </Card>
  )
}

export default Footer;