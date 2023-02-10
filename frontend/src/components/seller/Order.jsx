import { Card, Container ,Button} from "react-bootstrap";
import { useState,useEffect } from "react";
import axios from "axios"


const OrderCard=({data})=>{
       console.log("card",data)

   
    return(

       <Card style={{backgroundColor:"whitesmoke",padding:"10px",margin:"10px", width:"300px"}}>
        
        <Card.Title>{data.name}</Card.Title>
        <Card.Title>No. of products: {data.count}</Card.Title>
        <Card.Title>Product Price: ${data.price}</Card.Title>
        <Card.Text>Address: {data.address}</Card.Text>
        <Card.Text>Mobile No.: {data.mnumber}</Card.Text>
        <Card.Title> Total Price: ${data.price*data.count}</Card.Title>
        <Button>Accept</Button>
       </Card>
    )

}


const Order =({state}) => {
  const [order,setOrder]=useState([])
 useEffect(()=>{

  axios.get(`http://localhost:8000/api/product/${state?state.number:""}`)
  .then((res) => {
    console.log("order", res.data.data.length);
    setOrder(res.data.data);
  })
  .catch((err) => {
    console.log(err);
  });
 },[])

    


    return(
       <>
      <Container>
         <h2>Number of orders are {order.length}</h2>
         <hr/>
        {order.map((data)=>(
            <OrderCard data={data}/>
        ))}
       
       
      

      </Container>

       </>
    )

     
}

export default Order;