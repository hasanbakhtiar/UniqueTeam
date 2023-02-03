import { useContext, useRef, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Info from "../components/Info";
import { UserContext } from "../context/UserContext";

interface userType{
    email:string,
    pass:string
}
const userData:userType={
    email:"a",
    pass:"1"
}


// interface propType{
//     pushData:(email:string)=>void
// }

const Login = () => {

    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPassRef = useRef<HTMLInputElement>(null);
    const [users,setUsers] = useContext<any>(UserContext);
    const navigate = useNavigate()
    const formSubmit =(e: { preventDefault: () => void; })=>{
        e.preventDefault();
        if(!inputEmailRef.current?.value || !inputPassRef.current?.value){
            alert('please,fill input filed');
            setUsers(false)
        }else{
            if(inputEmailRef.current?.value === userData.email && inputPassRef.current?.value ===userData.pass){
                setUsers(true);
                navigate('/');
            }else{
                alert('email or password is wrong!');
            }
        }
    }
    
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="text-center my-5">Login</h1>
        <Col md={6}>
          <Form onSubmit={formSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="Enter email" ref={inputEmailRef} />
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" ref={inputPassRef} />
            </Form.Group>
          
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </div>
    </Container>
  );
};

export default Login;
