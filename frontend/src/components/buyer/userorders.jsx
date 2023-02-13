import { Card, Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar  from "./Navbar";

const OrderCard = ({ data }) => {

   console.log("yhuj".num)
  return (
    <>
 <li>
      <Card
        style={{
          backgroundColor: "whitesmoke",
          padding: "10px",
          margin: "10px",
          width: "300px",
        }}
      >
        <Card.Title>{data.name}</Card.Title>
        <Card.Title>No. of products: {data.count}</Card.Title>
        <Card.Title>Product Price: ${data.price}</Card.Title>
        <Card.Text>Address: {data.address}</Card.Text>
        <Card.Text>Mobile No.: {data.mnumber}</Card.Text>
        <Card.Title> Total Price: ${data.price * data.count}</Card.Title>
      </Card>
    </li> 
    </>
  );
};

const Userorder = () => {
  const [order, setOrder] = useState([]);

  const get = sessionStorage.getItem("userdata");

  const state = JSON.parse(get);

 

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/product/${state ? state.number : ""}`
      )
      .then((res) => {
        //  console.log("order", res.data.data);
        setOrder(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <Navbar/>
      <h1>your orders</h1>
      <ul>
        {order.map((data) => (
          <OrderCard data={data} />
        ))}
      </ul>
    </>
  );
};

export default Userorder;
