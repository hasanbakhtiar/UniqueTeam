import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


const Header = () => {
    const [users,setUsers] = useContext<any>(UserContext);
  return (
    <Navbar bg='light'>
    <Container>
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {/* Signed in as: <a href="#login">Mark Otto</a> */}
         {users ? <span>Welcome Hasan</span>:<span></span>}
        </Navbar.Text>
        <Link to="/login" className='btn btn-success ms-3'>{users ? <Button variant='danger' onClick={()=>{setUsers(false)}}>Log Out</Button>:<>Login</>}</Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header