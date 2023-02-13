import Navbar from "../Navbar.jsx";
import { Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Buy from "../Buy";



const Cardf = ({ data }) => {
  const { _id, categorise, image, name, price, about } = data;

  // console.log("card", data);
  
  const get = sessionStorage.getItem("userdata");
  const state = JSON.parse(get);
  const num ={
    categorise:data.categorise,
    number:data.number,
    image:data.image,
    name:data.name,
    price:data.price,
    about:data.about,
    usernumber:state.number}
 

  


  const handleCart=()=>{


    axios
    .post("http://localhost:8000/api/product/cart",num
    )
    .then((res) => {
      console.log(res);
    
    })
    .catch((err) => {
      console.log(err);
    });

  }

  return (
    <li key={_id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={image}
          style={{ backgroundColor: "red", height: "100px" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>${price}</Card.Text>
          <Card.Text>{about}</Card.Text>
          <Card.Text>{categorise}</Card.Text>
          <Button   variant="primary"> <Link  style={{color:"white",textDecoration:"none"}}  to="/buy" state={data}>Buy</Link></Button>
          <Button onClick={handleCart}  variant="primary">Buy</Button>
        
        </Card.Body>
      </Card>
    </li>
  );
};

const Food = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/food")
      .then((res) => {
        console.log("get", res.data.data);
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log("foodii", product);




  return (
    <>
      <Navbar />
   <h1>grocery</h1>
        <ul>
        {product.map((data) => (
          <Cardf data={data} handleBuy={handleBuy} />
        ))}
      </ul>
       
    
    </>
  );
};

export default Food;
