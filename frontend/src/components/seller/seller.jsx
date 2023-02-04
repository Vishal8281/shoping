import Navbar from "./Navbar";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios"  


const product ={
  categorise:"",
  image:"",
  name:"",
  price:"",
  about:""
}

const Seller = () => {

  const [data, setData] = useState(product);

  console.log("product",data)

const handleChange =(e)=>{
  setData((data)=>({...data,[e.target.name]: e.target.value}))
}

const handleSubmit =(e)=>{
  e.preventDefault();
  axios.
      post("http://localhost:8000/api/product",data)
      .then((res)=>{
        setData( { categorise:"",
        image:"",
        name:"",
        price:"",
        about:""});
        console.log(res.data.message);
       

        })
        .catch((err) => {
          console.log("Error couldn't create product");
          console.log(err.message);
        });

};




  return (
    <>
      <Navbar />

      <Form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#f5f5f5",
          margin: "40px 100px ",
          padding: "30px",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Select Categorise</Form.Label>
          <Form.Select aria-label="Default select example" type="text" name="categorise" value={data.categorise}    onChange={handleChange}>
          <option value="category">Select Category</option>
            <option value="food">Food</option>
            <option value="electronics">Electronics</option>
            <option value="cloth">Cloth</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Put product image
            <br/>
            note:file should be less then 16mb.
          </Form.Label>
          <Form.Control type="file" placeholder="put image" name="image" value={data.image}    onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter product name"  name="name" value={data.name}    onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>price</Form.Label>
          <Form.Control type="number" placeholder="price" name="price" value={data.price}    onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>About your Product</Form.Label>
          <Form.Control type="text" placeholder="about" name="about" value={data.about}    onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Seller;
