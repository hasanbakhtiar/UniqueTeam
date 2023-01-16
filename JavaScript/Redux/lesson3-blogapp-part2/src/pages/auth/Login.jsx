import React, { useState } from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const data = {
    email:"info@example.com",
    password:"info2023"
}
const Login = props => {
    const [email,setEmail] = useState();
    const [pass,setPass] = useState();
    const formSubmit=(e)=>{
        e.preventDefault();
        if (!email || !pass) {
            alert("please, fill out input")
        }else{
            if (email === data.email && pass === data.password) {
                props.history.push('/admin');
            }else{
                alert('password or email is wrong!')
            }
        }
    }
  return (
   <>
    <h1 className='text-center my-5'>Login</h1>
    <div className="d-flex align-items-center justify-content-center flex-column">
    <Col md={6}>
    
    <Form onSubmit={formSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={e=>{setEmail(e.target.value)}} type="text" placeholder="Enter title" />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={e=>{setPass(e.target.value)}} type="password" placeholder="Enter description" />
    
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form> 

    </Col>
     </div>
   
   </>
  )
}

export default Login