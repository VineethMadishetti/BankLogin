import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Navbar from 'react-bootstrap/Navbar';
import './Pages.css'
//import { Link } from 'react-router-dom';



const MyProfile = () => {
  
  return (
    <div className="col-md-8"> 
        <Navbar.Brand  href="#home" className='brand' >My Profile</Navbar.Brand>
       
       <Form className="mt-4">
        <FloatingLabel controlId="floatingInput" label="First name" className="mb-3">
        <Form.Control type="text" placeholder="First Name"  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">
        <Form.Control type="text" placeholder="Last Name" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="E-mail address" className="mb-3">
        <Form.Control type="text" placeholder="email address" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Region" className="mb-3">
      <Form.Select aria-label="Floating label select example">
        <option>Hawaii</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      </FloatingLabel>
     
    </Form>
     
    </div>
  )
}

export default MyProfile