import { useState } from "react";

function Records(props) {
  const { person, paid } = props.info;
  const { main, protein, rice, sauce, toppings, drink, cost } =
    props.info.order;
  const [payStatus, setPayStatus] = useState(paid);
  const payTicket = () => {
    setPayStatus(!paid);
  };

  return (
    <div className="order-ticket" onClick={payTicket}>
      <h1>{person}</h1>
      <ul>
        <li>Main: {main}</li>
        <li>Protein: {protein}</li>
        <li>Rice: {rice}</li>
        <li>Sauce: {sauce}</li>
        <li>Toppings: {toppings.join(", ")}</li>
        <li>Drink: {drink}</li>
      </ul>
      <h2 className="order-cost">${cost}</h2>
    </div>
  );
}

export default Records;
