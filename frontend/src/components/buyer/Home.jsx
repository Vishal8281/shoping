import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import Cloth from "./images/cloth.jpg";
import Food from "./images/food.png";
import Tv from "./images/Tv.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <br />

      <Container style={{backgroundColor:"#FFFAFA"}}>
        <Row>
          <Col>
            <Link to="/cloth">
              <Card
                style={{ width: "25rem", height: "18rem" }}
                className="bg-white  text-black"
              >
                <Card.Title>Clothing & Apparel</Card.Title>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/food">
              {" "}
              <Card
                style={{ width: "25rem", height: "18rem" }}
                className="bg-white  text-black"
              >
                <Card.Title>Grocery</Card.Title>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/electric">
              {" "}
              <Card
                style={{ width: "25rem", height: "18rem" }}
                className="bg-white  text-black"
              >
                <Card.Title>Electronics & Gadgets.</Card.Title>
              </Card>
            </Link>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Link to="/footwear">
              {" "}
              <Card
                style={{ width: "25rem", height: "18rem" }}
                className="bg-white  text-black"
              >
                <Card.Title>Footwear & Shoes</Card.Title>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/books">
              {" "}
              <Card
                style={{ width: "25rem", height: "18rem" }}
                className="bg-white  text-black"
              >
                <Card.Title>Books</Card.Title>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/stationery">
              {" "}
              <Card
                style={{ width: "25rem", height: "18rem" }}
                className="bg-white  text-black"
              >
                <Card.Title>Stationery</Card.Title>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
