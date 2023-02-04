import { Link } from "react-router-dom";
import Navbar from "./buyer/Navbar";
import { Carousel, Container, Row, Card, Button } from "react-bootstrap";
import Cloth from "../components/buyer/images/cloth.jpg";
import Food from "../components/buyer/images/food.png";
import Tv from "../components/buyer/images/Tv.jpg";

const Shop = () => {
  return (
    <>
      <Navbar />
      {' '}
      <Container >
        
          <Carousel style={{backgroundColor: "#f5f5f5" , margin: "40px 100px " ,height:"400px" }}>
            <Carousel.Item interval={1000}>
              <img
                
                style={{backgroundColor: "red" ,width:"1200px", height:"400px"}}
             
                src={Cloth}
                alt="First slide"
             
                
              />
               <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
             
            </Carousel.Item>
            <Carousel.Item interval={500}  >
              <img
               
               style={{backgroundColor: "red" ,width:"1200px", height:"400px"}}
                src={Food}
                alt="Second slide"
                
               
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{backgroundColor: "red" ,width:"1200px", height:"400px"}}
               
                src={Tv}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
    

        {/* <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row> */}

      </Container>
    </>
  );
};

export default Shop;
