import { Container, Card, Button, Form } from "react-bootstrap";
import Navbar from "./Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Link, useNavigate } from "react-router-dom";

const Buy = () => {
  const { state } = useLocation();
  console.log("Buy", state);
  const navigate = useNavigate();

  const get = sessionStorage.getItem("userdata");
  console.log("storage",JSON.parse(get))
  const number = JSON.parse(get);

  
   
  const [data, setData] = useState({
    count: "",
    mnumber:"",
    address: "",
    note: "",
  });

  const handleChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    console.log(data);
  };

  const handleClick = () => {
    axios
      .post("http://localhost:8000/api/product/buy", { ...state, ...data })
      .then((res) => {
        alert("order is send");
        navigate("/home")
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Navbar />
      <Container>
        <Card
          className="text-center"
          style={{ width: "1000px", height: "1000px", margin: "40px 150px" }}
        >
          <Card.Img
            style={{ width: "100%", height: "400px" }}
            variant="top"
            src={state.image}
          />
          <Card.Body>
            <Card.Title>{state.name}</Card.Title>
            <Card.Text>Price: ${state.price}</Card.Text>
            <Card.Text>{state.about}</Card.Text>
            <Form style={{ margin: "20px" }}>
            <Form.Label>How many {state.name} you want</Form.Label>
              <Form.Control
                onChange={handleChange}
                style={{ margin: "20px auto", width: "50px" }}
                type="number"
                value={data.count}
                name="count"
              />
             
              <Form.Control
                onChange={handleChange}
                style={{ margin: "20px auto" }}
                type="text"
                value={data.mnumber}
                name="mnumber"
                placeholder="Enter mobile number"
              />

              <Form.Control
                onChange={handleChange}
                style={{ margin: "20px auto" }}
                as="textarea"
                rows={3}
                value={data.address}
                name="address"
                placeholder="address"
              />
              <Form.Control
                onChange={handleChange}
                as="textarea"
                rows={3}
                value={data.note}
                name="note"
                placeholder="note for seller"
              />
            </Form>
            <Card.Text>Total Price:${state.price * data.count}</Card.Text>

            <Button onClick={handleClick} variant="primary">
              pay
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Buy;
