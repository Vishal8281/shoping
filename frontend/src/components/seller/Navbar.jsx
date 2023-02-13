

import { useNavigate } from "react-router-dom";
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
   const navigate=useNavigate()

  const handleLogout =()=>{
    sessionStorage.clear()
    navigate("/")
  }
 
  return (
    // <div className="Navbar">

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/shop">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Homes</Nav.Link>
            <Nav.Link href="/Contact" >Contact</Nav.Link>
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
          {" "}
          
            
        </Navbar.Collapse>
      </Container>
      <Button onClick={handleLogout}>Logout</Button>
     
    </Navbar>

    // </div>
  );
};

export default Navbarr;

