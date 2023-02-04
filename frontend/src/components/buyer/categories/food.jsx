import Navbar from "../Navbar.jsx";
import { Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Buy from "../Buy";


const Cardf = ({ data, handleBuy }) => {
  const { _id, categorise, image, name, price, about } = data;

  console.log("card", data);

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
          <Card.Text>{price}</Card.Text>
          <Card.Text>{about}</Card.Text>
          <Card.Text>{categorise}</Card.Text>
          <Button onClick={handleBuy} name={_id} variant="primary">
            {/* <Link style={{ color: "white", textDecoration: "none" }} to="/buy"> */}
              Buy
            {/* </Link> */}
          </Button>
        </Card.Body>
      </Card>
    </li>
  );
};

const Food = () => {
  const [product, setProduct] = useState([]);
  const [id, setId] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product")
      .then((res) => {
        console.log("get", res.data.data);
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("food", product);

  const handleBuy = (e) => {
    setId(e.target.name);
    setOpen(true);
  };

  const handleClose=()=>{
    setOpen(false)
  }
  console.log("fooddd",id)

  return (
    <>
      <Navbar />
      {open ? (
         <section>
         <Buy 
        
          Product={product}
           handleClose={handleClose}
         />
       </section>
       
      ) : (
        <ul>
        {product.map((data) => (
          <Cardf data={data} handleBuy={handleBuy} />
        ))}
      </ul>
       
      )}
    </>
  );
};

export default Food;
