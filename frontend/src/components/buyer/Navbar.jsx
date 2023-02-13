import "./buyer.css";
import { json, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cart, PersonCircle } from "react-bootstrap-icons";

const Navbarr = () => {
const get = sessionStorage.getItem("userdata");
const state = JSON.parse(get);

const orderno = sessionStorage.getItem("count")
const count =JSON.parse(orderno)




  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    // <div className="Navbar">

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      {" "}
   
      <Container>
        <Navbar.Brand href="/shop">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" state={state}>
              Homes
            </Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/cart">
              <Cart />
              {count}
            </Nav.Link>
          </Nav>

          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}

          <Nav>
            <NavDropdown title="user" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                {state ? state.username : "username"}
              </NavDropdown.Item>

              <NavDropdown.Item href="/userorder">Orders</NavDropdown.Item>
              <NavDropdown.Item href="/shome">Sell</NavDropdown.Item>
              <NavDropdown.Divider />
              <Nav.Link href="/">
                <NavDropdown.Item onClick={handleLogout}>
                  {state ? "Logout" : "Login"}
                </NavDropdown.Item>
              </Nav.Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
