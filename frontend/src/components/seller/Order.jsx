import { Card, Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const OrderCard = ({ data }) => {
  const [accept, setAccept] = useState(false);

  const handleAccept = () => {
    console.log("accepted");
    axios
      .post("http://localhost:8000/api/product/accept", data)
      .then((res) => {
        console.log(res);

        setAccept(true);
      })
      .catch((err) => {
        console.log(err);
        alert("alredy accpted");
      });
  };


  const hndleDelete=()=>{
  axios.delete(`http://localhost:8000/api/product/${data._id}`)
  .then((res)=>{
   alert("Order Deleted")
  })
  .catch((err)=>{
   console.log(err)
  })

  }

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
        <Card.Title>{data.name}</Card.Title>
        <Card.Title>No. of products: {data.count}</Card.Title>
        <Card.Title>Product Price: ${data.price}</Card.Title>
        <Card.Text>Address: {data.address}</Card.Text>
        <Card.Text>Mobile No.: {data.mnumber}</Card.Text>
        <Card.Title> Total Price: ${data.price * data.count}</Card.Title>
        {accept ? (
          <Button onClick={hndleDelete}>Delete</Button>
        ) : (
          <Button onClick={handleAccept}>Accept</Button>
        )}
      </Card>
    </li>
  );
};

const Order = ({ state }) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${state ? state.number : ""}`)
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
      <ul>
        <h2>Number of orders are {order.length}</h2>
        <hr />
        {order.map((data) => (
          <OrderCard data={data} />
        ))}
      </ul>
    </>
  );
};

export default Order;
