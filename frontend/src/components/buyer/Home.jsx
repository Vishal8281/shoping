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
      <br/>
      
      <Container>
        
        <Row>
        <Col>
          <Link to="/cloth">
            <Card style={{ width: "25rem" }} className="bg-dark  text-black">
              <Card.Img src={Cloth} alt="Card image" style={{ filter: blur(8) }} />
              <Card.ImgOverlay>
                <Card.Title>Cloth</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="/food">
            {" "}
            <Card style={{ width: "25rem" }} className="bg-dark  text-black">
              <Card.Img src={Food} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Food</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="/electric">
            {" "}
            <Card style={{ width: "25rem" }} className="bg-dark  text-black">
              <Card.Img src={Tv} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Electronics</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Home;
