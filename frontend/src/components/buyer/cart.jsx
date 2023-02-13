import { Card, Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link} from "react-router-dom";

import Navbar from "./Navbar";

const OrderCard = ({ data }) => {

  console.log(data)
  const hndleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/product/user/${data._id}`)
      .then((res) => {
        alert("Order Deleted");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <li>
      <Card
        style={{
          backgroundColor: "whitesmoke",
          padding: "10px",
          margin: "10px",
          width: "300px",
        }}
      >
        <Card.Img  src={data.image}/>
        <Card.Title>{data.name}</Card.Title>
        <Card.Title>Price: ${data.price}</Card.Title>
        <Card.Text>${data.about}</Card.Text>
        <Card.Text>Mobile No of seller.: {data.usernumber}</Card.Text>
       
        <Button><Link  style={{color:"white",textDecoration:"none"}}  to="/buy" state={data}>Buy</Link></Button>
        <br />
        <Button onClick={hndleDelete}>Delete</Button>
        
      </Card>
    </li>
  );
};

const Cart = () => {
  const get = sessionStorage.getItem("userdata");
  const state = JSON.parse(get);

 

  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/product/user/${state ? state.number : ""}`
      )
      .then((res) => {
        //  console.log("order", res.data.data);
        setCart(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  sessionStorage.setItem("count",cart.length)

  return (
    <>
      <Navbar  />
      <ul>
        <hr />
        {cart.map((data) => (
          <OrderCard data={data} />
        ))}
      </ul>
    </>
  );
};

export default Cart;
