import Navbar from "../Navbar.jsx";
import {Button,Card }from 'react-bootstrap'
import Image from "../images/cloth.jpg";


const Cloth = () => {
  return (
    <>
      <Navbar />
      <Card style={{ width: "20rem" }} >
        <Card.Img variant="top" src={Image}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default Cloth;
