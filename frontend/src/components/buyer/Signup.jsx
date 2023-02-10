import { Form, Button } from "react-bootstrap";
import { useState,useEffect } from "react";
import {
  PersonFill,
  LockFill,
  PhoneFill,
 EnvelopeFill
} from "react-bootstrap-icons";
import { Link,useNavigate } from "react-router-dom";

import axios from "axios"







const Sign = () => {

const [user,setUser]=useState({
  number:"",
  username:"",
  email:"",
  password:"",
  confpassword:""
})

const navigate=useNavigate();

const handleChange =(e)=>{
 setUser((data)=>({...data,[e.target.name]: e.target.value}))
  console.log(user)
}


const handleSubmit=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:8000/api/product/signup",user)
  .then((res)=>{
   setUser({
  number:"",
  username:"",
  email:"",
  password:"",
  confpassword:""

   })
   
   alert("you are registered")
   navigate("/");
  

  })
  .catch((err)=>{
    console.log("error couldent added user")
    console.log(err.response)
  })
}


  return (
    <Form
    onSubmit={handleSubmit}
      style={{
        margin: "120px auto",
        padding: "20px",
        width: "450px",
        height: "500px",
        backgroundColor: "",
      }}
    >
      <Form.Label>
        Signup <Link to="/"> Login</Link>
      </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicnumber">
        <PersonFill className="ml-4"  />
        <Form.Control
         type="text"
          placeholder="Enter mobile number"
          name="number"
          
          value={user.number}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicname">
        <PersonFill className="ml-4"  />
        <Form.Control
         type="text"
          placeholder="Enter name"
          name="username"
          
          value={user.username}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <EnvelopeFill className="ml-4"  />
        <Form.Control
          type="text"
         
          placeholder=" Enter Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <LockFill className="ml-4" />
        <Form.Control 
        type="password"
      
         placeholder=" Enter Password" 
         name="password" 
         value={user.password}
         onChange={handleChange}
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicnumber">
        <PhoneFill />
        <Form.Control
          type="password"
         
         
          placeholder="Re-enter password"
          name="confpassword"
          value={user.confpassword}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" style={{ marginLeft: "150px" }}>
        Submit
      </Button>
    </Form>
  );
};
export default Sign;
