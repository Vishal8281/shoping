import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import Cloth from "./images/cloths.jpg";
import Food from "./images/grocery.jpg";
import Electronics from "./images/Electronics.jpg";
import Book from "./images/Book.jpg";
import Footwear from "./images/footwear.jpg";
import Stationery from "./images/stationery.jpg";



const Home = () => {
  return (
    <div style={{backgroundColor:"#FFFAFA"}}>
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
               <Card.Img  style={{height:"17rem"}} src={Cloth} alt="Card image" />
               <Card.ImgOverlay> <Card.Title>Clothing & Apparel</Card.Title></Card.ImgOverlay>
               
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
                 <Card.Img src={Food} alt="Card image" />
               <Card.ImgOverlay> <Card.Title>Grocery</Card.Title></Card.ImgOverlay>
               
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
                 <Card.Img style={{height:"17rem"}} src={Electronics} alt="Card image" />
               <Card.ImgOverlay> <Card.Title>Electronics & Gadgets.</Card.Title></Card.ImgOverlay>
               
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
                 <Card.Img src={Footwear} alt="Card image" />
               <Card.ImgOverlay><Card.Title>Footwear & Shoes</Card.Title></Card.ImgOverlay>
                
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/book">
              {" "}
              <Card
                style={{ width: "25rem", height: "18rem" }}
                className="bg-white  text-black"
              >
                 <Card.Img style={{height:"17rem"}} src={Book} alt="Card image" />
               <Card.ImgOverlay> <Card.Title>Books</Card.Title></Card.ImgOverlay>
               
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
                 <Card.Img src={Stationery} alt="Card image" />
               <Card.ImgOverlay> <Card.Title>Stationery</Card.Title></Card.ImgOverlay>
               
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
