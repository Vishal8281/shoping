import { Link ,useLocation} from "react-router-dom";
import Navbar from "./buyer/Navbar";
import { Carousel, Container, Row, Card, Button, Col } from "react-bootstrap";
import Cloth from "../components/buyer/images/cloth.jpg";
import Food from "../components/buyer/images/food.png";
import Tv from "../components/buyer/images/Tv.jpg";
import {useState} from "react"
import {Instagram,Facebook,Linkedin} from "react-bootstrap-icons"



const Shop = () => {
  const [count, setCoutn]=useState(0)
  const {state}=useLocation()
  console.log("profile")
   
  const handleClick =()=>{

    let product = count+1;
    setCoutn(product)


  }






  return (

    


    <>
      <Navbar state={state}  count={count}/>
  
          <Row  style={{backgroundColor:"#FFFAFA"}} >
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                
                style={{width:"1520px", height:"400px",padding:"20px 100px"}}
             
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
               
               style={{width:"1520px", height:"400px",padding:"20px 100px"}}
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
                 style={{width:"1520px", height:"400px",padding:"20px 100px"}}
               
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
          </Row>
        <hr/>
        <Row style={{margin:"20px",backgroundColor:"#FFFAFA"}}>
          <Col>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://assets.myntassets.com/v1/images/style/properties/c0d7bee21dcc124c3254cfda13193d7f_images.jpg
" />
      <Card.Body>
    
        <Button onClick={handleClick}  variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://assets.myntassets.com/v1/images/style/properties/aa603e98a06792f867b84fb2d3f8c073_images.jpg
" />
      <Card.Body>
      
        <Button onClick={handleClick} variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://assets.myntassets.com/v1/images/style/properties/Lee-Cooper-Men-Black-Sandals_1b0f7922cd4ca61ee33d35927163a007_images.jpg
" />
      <Card.Body>
     
        <Button onClick={handleClick} variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://assets.myntassets.com/v1/images/style/properties/The-Amazing-Spiderman-Boys-Black-T-shirt_4d4777de917e21e3cc9e1376bad28741_images.jpg" />
      <Card.Body>
    
        <Button onClick={handleClick} variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
          </Col>
      
        </Row>
        <Row style={{height:"250px", backgroundColor:"black", color:"white"}}>
          <Col style={{margin:"20px"}}>
          <p>About us</p>
          <p> we are interface between trader and customers who want to sell their products online</p>
        </Col>
        <Col style={{margin:"20px"}}>
        <p>Follw us</p>
        <Instagram style={{margin:"5px"}} />
        <Facebook style={{margin:"5px"}} />
        <Linkedin  style={{margin:"5px"}} />

        
        </Col>
          <p style={{margin:"20px"}}>CopyRights-All rights reserved</p>
        </Row>

    
    </>
  );
};

export default Shop;
