import React, { useContext } from "react";
import { contest } from "../App";
import { Card } from "reactstrap";

export default function () {
  const { cart, setcart } = useContext(contest);
  console.log(cart);

  return (
    <div>
      <h1>
        {cart.map((data) => {
          return (
            <Card key={data.id}>
              <h2>{data.name}</h2>
              <button>Remove</button>
              <button>Buy</button>
            </Card>
          );
        })}
      </h1>
    </div>
  );
}
