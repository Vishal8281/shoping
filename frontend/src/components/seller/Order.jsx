import { Card, Container } from "react-bootstrap";


const OrderCard=()=>{
    return(

       <Card style={{backgroundColor:"yellowgreen",padding:"10px",margin:"10px",}}>
        <Card.Title>shirt</Card.Title>
        <Card.Text>new</Card.Text>
        <Card.Link>see</Card.Link>
       </Card>
    )

}


const Order =() => {


    return(
       <>
      <Container>
       
      <OrderCard/>
      

      </Container>

       </>
    )

     
}

export default Order;