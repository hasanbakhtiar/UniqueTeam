import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home">Best Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/shop">
              <Nav.Link>Shop</Nav.Link>
            </LinkContainer>
          </Nav>
          <LinkContainer to="/cart">
            <Button variant="success">Cart</Button>
          </LinkContainer>
          <LinkContainer className="ms-3" to="/wishlist">
            <Button variant="warning">Wishlist</Button>
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
