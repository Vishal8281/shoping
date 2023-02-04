import "./buyer.css";
import Home from "./Home";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbarr = () => {
  return (
    // <div className="Navbar">

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">{' '}
    
    <Button  variant="outline-primary" href="dashboard">SELL</Button>
     
      <Container>
   
        <Navbar.Brand href="/">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Homes</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
         
          <Nav>
           
            <NavDropdown title="User" id="collasible-nav-dropdown">
            <Nav.Link href="/user"> <NavDropdown.Item href="#action/3.1"> Profile</NavDropdown.Item></Nav.Link>
             
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
  );
};

export default Navbarr;


