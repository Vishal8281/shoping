import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { ListGroup, Col, Row, Container } from "react-bootstrap";
import Order from "./Order";
import { useState } from "react";
import Seller from "./seller";

const Shome = ({}) => {
  const [open, setOpean] = useState(false);
  const { state } = useLocation();
  console.log(state);


  const handleClicksell =()=>{
    setOpean(true)
}

const handleClick=()=>{
  setOpean(false)
}

  return (
    <>
      <Navbar state={state} />

      <Row style={{ backgroundColor: "" }}>
        <Col>
          <ListGroup
            style={{ height: "700px", position: "static", width: "300px" , }}
          >
            <ListGroup.Item style={{backgroundColor:"#f5f5f5"}}>
              <h3>Profile</h3>
              
              <ul>
                
                <li>{state ? state.username :"Login to see profile"}</li>
                
                <li>{state ? state.email : <Link to="/">Login</Link>}</li>

                <li> {state?state.number:""}</li>

                <li></li>

               
              </ul>
            </ListGroup.Item>
            <ListGroup.Item style={{ height: "50px",backgroundColor:"#f5f5f5" }}></ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#f5f5f5"}}>
              <button
                 onClick={handleClicksell}
                 
                style={{
                  padding: "10px",
                  margin: "10px",
                  textDecoration: "none",
                  color: "black",
                  border:"none"
                }}
              >
                SELL
              </button>
            </ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#f5f5f5"}}>
              <button
             onClick={handleClick}
                style={{
                  padding: "10px",
                  margin: "10px",
                  textDecoration: "none",
                  color: "black",
                  border:"none",
               
                }}
              >
                ORDERS
              </button>
            </ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#f5f5f5"}}>
              <Link
               to="/eidit"
                style={{
              
                  padding: "10px",
                  margin: "10px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Edit Profile
              </Link>
            </ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#f5f5f5"}}>
              <Link
              
                to="/Settings"
                style={{
                 
                  padding: "10px",
                  margin: "10px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                {" "}
                Settings
              </Link>
            </ListGroup.Item>
            <ListGroup.Item style={{ height: "200px",backgroundColor:"#f5f5f5" }}></ListGroup.Item>
          </ListGroup>
        </Col>
        {state? <Col xs={9} style={{ backgroundColor: "", float: "right" }}>
          
          {open ? <Seller state={state} /> : <Order state={state} />}
        
        </Col>:<Col></Col>}
       
      </Row>
    </>
  );
};

export default Shome;
