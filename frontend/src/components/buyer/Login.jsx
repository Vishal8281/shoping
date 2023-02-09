import { Form, Button } from "react-bootstrap";
import { PersonFill, LockFill } from "react-bootstrap-icons";

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import axios from "axios";
import Profile from "./profile";




const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [userlogin, setUserlogin] = useState(false);



  const navigate = useNavigate();


  const handleChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/product/login", data)
      .then((res) => {
        setData({
          email: "",
          password: "",
        });
        console.log(res.data.user);
        setUserlogin(true);
        navigate("/shop", {state:res.data.user});
       
      
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  return (
    <>
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
        <Form.Label>Login </Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <PersonFill className="ml-4" style={{}} />
          <Form.Control
            type="text"
            name="email"
            value={data.email}
            placeholder="Enter username/email"
            onChange={handleChange}
            style={{}}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <LockFill className="ml-4" style={{ display: "inline-block" }} />
          <Form.Control
            type="password"
            name="password"
            value={data.password}
            placeholder="Password"
            onChange={handleChange}
            style={{ display: "inline-block" }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ marginLeft: "150px" }}>
          Submit
        </Button>
        <Form.Group>
          {" "}
          <Form.Label>
            Dont have an account <Link to="/signup"> Signup</Link>{" "}
          </Form.Label>
        </Form.Group>

        <Link to="/shop">Home</Link>
      </Form>

   
      
    
    </>
  );
};
export default Login;
