import { Container, Card,Button } from "react-bootstrap";
import Navbar from "./Navbar";
import axios from "axios";
import { useState,useEffect } from "react";




const Buy = ({ handleClose,_id}) => {
    // console.log("Buy",_id)

    const [data,setData]=useState([]);

    useEffect(() => {
        axios
          .get(`http://localhost:8000/api/product/${_id}`)
          .then((res) => {
            console.log("get", res.data.data);
            setData(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

console.log("buy product",data.name)

// const { _id, categorise, image, name, price, about } = data.data;
   
    

  return (
    <>
    <Button onClick={handleClose}>BACK</Button>
    <Container >
      <Card className="text-center" style={{ width: "1000px", height: "600px",margin:"40px 150px" }}>
        <Card.Img  style={{width:"100%",height:"50%",}} variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
           Price: ${data.price}
          </Card.Text>
          <Card.Text>
           {data.about}
          </Card.Text>
          <Button  variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
};

export default Buy;
