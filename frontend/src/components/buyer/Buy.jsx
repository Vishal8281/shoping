import { Container, Card,Button } from "react-bootstrap";
import Navbar from "./Navbar";
import axios from "axios";



const Buy = ({ handleClose,product}) => {
    console.log("Buy")
    

  return (
    <>
    <Button onClick={handleClose}>BACK</Button>
    <Container >
      <Card className="text-center" style={{ width: "1000px", height: "600px",margin:"40px 150px" }}>
        <Card.Img  style={{width:"100%",height:"50%",}} variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button  variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
};

export default Buy;
