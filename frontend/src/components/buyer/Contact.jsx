
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Contact =()=>{
  const {state}=useLocation()
  console.log("contact",state)
    return(
        <>
          <Navbar/>
          
        <h1 >Contact</h1>
        <h1>this part is on devlopment mode</h1>
        </>
       
    )
}

export default Contact;