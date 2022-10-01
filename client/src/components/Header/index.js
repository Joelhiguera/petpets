import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
// import { LOGGED_IN_USER } from '../../utils/queries'
// import { useQuery } from '@apollo/client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css"







function Header() {


  function showNavigation() {
    if (Auth.loggedIn()) {
      return(
        <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Link to='/'>
            <Navbar.Brand href="#home">PETPETS</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#adoption">Adoption</Nav.Link>
              <NavDropdown title="Breeds" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Dogs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Cats
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Other</NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
            <Nav>

                
                <Nav.Link onClick={() => Auth.logout()} href="/" >Log Out</Nav.Link>
            
                <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        

      //   <div className="headerContainer">
      //   <h2 className="logo">
      //     <Link to="/">
      //       PETPETS
      //     </Link>
      //   </h2>
      // <ul className="navbarUl">
      //   <li className="navbarLi">
      //       <a href="/" onClick={() => Auth.logout()}>
      //         Logout
      //       </a>
      //   </li>
      //   <li className="navbarLi">
      //     <Link to="/Profile">
      //       profile 
      //     </Link>
      //   </li>
      // </ul>
      // </div>
      );
    } 
    else {
      return (
        <Navbar collapseOnSelect expand="lg"  variant="dark">
        <Container>
          <Link to='/'>
            <Navbar.Brand href="#home">PETPETS</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#adoption">Adoption</Nav.Link>
              <NavDropdown title="Breeds" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Dogs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Cats
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Other</NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
            <Nav>
              
                <Nav.Link href="/signup" >Signup</Nav.Link>
            
                <Nav.Link href="/login">Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
    } 
  }

    return (
      <div className="">
        {showNavigation()}
      </div>
    )
 
    }
  
    export default Header