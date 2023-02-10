
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios"  


const product ={
  categorise:"",
  number:"",
  name:"",
  price:"",
  about:""
}

const Seller = ({state}) => {

  const [data, setData] = useState(product);
 const [image,setImage]=useState({
  image:"",
 })


const handleChange =(e)=>{
  setData((data)=>({...data,[e.target.name]: e.target.value}))
  console.log("product data",data)
}

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};


const handleImageChange = async (e) => {
  const file = e.target.files[0];
  const base64 = await convertToBase64(file);
  setImage((image)=>({image:base64}));
  console.log("image",base64)
};

const handleSubmit =(e)=>{
  e.preventDefault();
  axios.
      post("http://localhost:8000/api/product",{...image,...data})
      .then((res)=>{
        setData( {
        categorise:"",
        number:"",
        image:"",
        name:"",
        price:"",
        about:""});
        console.log(res.data.message);
         alert("Product Added")

        })
        .catch((err) => {
          console.log("Error couldn't create product");
          console.log(err.message);
        });

};




  return (
    <>
   

     {state? <Form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#f5f5f5",
          margin: "40px 100px ",
          padding: "30px",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasiccat">
          <Form.Label>Select Categorise</Form.Label>
          <Form.Select aria-label="Default select example" type="text" name="categorise" value={data.categorise}    onChange={handleChange}>
          <option value="category">Select Category</option>
            <option value="food">Food</option>
            <option value="electronics">Electronics</option>
            <option value="cloth">Cloth</option>
            <option value="footwear">Footwear</option>
            <option value="book">Book</option>
            <option value="stationery">Stationery</option>

          </Form.Select>
        </Form.Group>

       

        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Put product image
            <br/>
            note:file should be less then 16mb.
          </Form.Label>
          <Form.Control type="file" placeholder="put image" name="image" value={data.image}    onChange={handleImageChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasiid">
          <Form.Label>Mobile Number</Form.Label>
          
          <Form.Control type="text" placeholder="Enter-number" name="number" value={data.number}    onChange={handleChange}/>
         
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
          Sell
        </Button>
      </Form>:<h1 style={{margin:"250px"}}>Log in  to sell</h1>}
    </>
  );
};

export default Seller;
