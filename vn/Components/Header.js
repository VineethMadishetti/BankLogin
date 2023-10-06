import React from 'react'
import { NavLink } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiBankFill } from "react-icons/ri";

const Header = () => {
    
  return (
    <Navbar bg="light" expand="lg">
    <Container>
    <Navbar.Brand className='title' > <RiBankFill size="2em"/>  | Bank Financial </Navbar.Brand>  
    <Navbar.Toggle />
    <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mobileNav">
          <NavLink className="link"><Link to='/' style={{color:'black'}}>Loan Dashboard</Link></NavLink>
          <NavLink className="link"><Link to='/myprofile' style={{color:'black'}}>My Profile</Link></NavLink>
          <NavLink className="link"><Link to='/accountinfo' style={{color:'black'}}>Account Information</Link></NavLink>
            
          </Nav>
        </Navbar.Collapse>
    
      
      
     
    </Container>
  </Navbar>
  )
}

export default Header