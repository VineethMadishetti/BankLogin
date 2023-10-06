import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Navbar from 'react-bootstrap/Navbar';
import './Pages.css'

const AccountantInfo = () => {
  return (
    <div className="col-md-8"> 
        <Navbar.Brand  href="#home" className='brand' >Account Information</Navbar.Brand>
       
       <Form className="mt-4">
        <FloatingLabel controlId="floatingInput" label="Accounting Frim" className="mb-3">
        <Form.Control type="text" placeholder="Accounting Frim"  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Accountant's Name" className="mb-3">
        <Form.Control type="text" placeholder="Accountant's Name"/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Accountant's Telephone Number" className="mb-3">
        <Form.Control type="text" placeholder="Accountant's Telephone Number" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Accountant's E-mail address" className="mb-3">
        <Form.Control type="text" placeholder="email address" />
      </FloatingLabel>

      
     
    </Form>
     
    </div>
  )
}

export default AccountantInfo