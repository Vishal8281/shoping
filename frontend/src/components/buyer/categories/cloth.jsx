import Navbar from "../Navbar.jsx";
import { Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Buy from "../Buy";



const Cardf = ({ data }) => {
  const { _id, categorise, image, name, price, about } = data;

  // console.log("card", data);

  return (
    <li key={_id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={image}
          style={{ backgroundColor: "red", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>${price}</Card.Text>
          <Card.Text>{about}</Card.Text>
          <Card.Text>{categorise}</Card.Text>
          <Button   variant="primary"> <Link  style={{color:"white",textDecoration:"none"}}  to="/buy" state={data}>Buy</Link></Button>
        
          <Button style={{marginLeft:"50px"}} variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </li>
  );
};

const Cloth = () => {
  const [product, setProduct] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/cloth")
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
    < >
      <Navbar />
   
        <ul>
        {product.map((data) => (
          <Cardf data={data} />
        ))}
      </ul>
       
   
    </>
  );
};


export default Cloth;
