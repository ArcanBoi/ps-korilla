import { useState } from "react";

function Records(props) {
  const { person, paid } = props.info;
  const { main, protein, rice, sauce, toppings, drink, cost } =
    props.info.order;
  const [payStatus, setPayStatus] = useState(paid);
  const payTicket = () => setPayStatus((prevPayStatus) => !prevPayStatus);

  console.log({ payStatus });

  return (
    <div className={`order-ticket ${!payStatus && "paid"}`} onClick={payTicket}>
      <h1>{person}</h1>
      <ul>
        <li>
          <strong>Main:</strong> <span>{main}</span>
        </li>
        <li>
          <strong>Protein:</strong> <span>{protein}</span>
        </li>
        <li>
          <strong>Rice:</strong> <span>{rice}</span>
        </li>
        <li>
          <strong>Sauce:</strong> <span>{sauce}</span>
        </li>
        <li>
          <strong>Toppings:</strong> <span>{toppings.join(", ")}</span>
        </li>
        <li>
          <strong>Drink:</strong> <span>{drink}</span>
        </li>
      </ul>
      <h2 className="order-cost">${cost}</h2>
    </div>
  );
}

export default Records;
