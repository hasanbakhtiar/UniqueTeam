import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand ><Link to='/' style={{"textDecoration":"none"}}>Blog App</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link ><NavLink to='/'>Home</NavLink></Nav.Link>
          <Nav.Link ><NavLink to='/blogs'>Blogs</NavLink></Nav.Link>
       
        </Nav>
      </Navbar.Collapse>
      <Nav className="d-flex">
          
            <Link to="/login"><Button variant="success">Login</Button></Link>
          </Nav>
    </Container>
  </Navbar>
  )
}

export default Header