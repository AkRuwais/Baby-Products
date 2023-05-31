import React from "react";
import { contest } from "../App";
import { useContext } from "react";
import './ProductCard.css'
import {
  Button,
  Card,
  ListGroup,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
// import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const { cart, setcart } = useContext(contest);
  // const navigate = useNavigate();

  const handlecart = (event) => {
    setcart([...cart, event]);
    console.log(event, "event---------");
    console.log(cart);
  };

  return (
    <>
    <div className="container">
  <Card className="card" color="light"
  >
    <CardBody>
      <CardImg className="image" src={props.image} alt="" />
      <CardTitle  tag="h5">{props.name}</CardTitle>
      <CardText >{props.description}</CardText>
      <ListGroup >
        <h3>₹{props.price}</h3>
      </ListGroup>
      <Button  onClick={() => handlecart(props)}>Add to Cart</Button>
    </CardBody>
  </Card>
</div>
</>

  );
}
