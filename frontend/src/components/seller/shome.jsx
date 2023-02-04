import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Card, Container, Col, Row } from "react-bootstrap";
import { alignPropType } from "react-bootstrap/esm/types";
const Shome = () => {
  return (
    <>
      <Navbar />
      
           
            <Link to="/order" style={{ float:"left", margin:"50px 220px",textDecoration: 'none' }} >
              {" "}
              <Card style={{width: "18rem", textAlign: "center",height:"180px", backgroundColor:"#f6f6f6" }}>
                <Card.Body>
                  <Card.Title style={{color:"black",marginTop:"50PX",fontSize:"30PX",hover:{backgroundColor:"#68ca25./,mnb"}}}>ORDERS</Card.Title>
                </Card.Body>
              </Card>
            </Link>
        

       
            {" "}
            <Link to="/seller" style={{float:"left", margin:"50px 220px",textDecoration: 'none' }}>
              {" "}
              <Card style={{ width: "18rem", textAlign: "center",height:"180px",backgroundColor:"#f6f6f6" }}>
                <Card.Body>
                  <Card.Title style={{color:"black",marginTop:"50PX",fontSize:"30PX"}}>SELL</Card.Title>
                </Card.Body>
              </Card>
            </Link>
            <hr/>
        
   
    </>
  );
};

export default Shome;
