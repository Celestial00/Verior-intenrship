import { useState } from "react";
import Item from "../Components/Item";
import pizza from "../MockData/pizza.json";

export default function Menu() {
  const [PizzaData, setPizzaData] = useState(pizza);

  return (
    <div className="flex flex-col gap-2">
      {PizzaData.map((data) => (
        <Item data={data} />
      ))}
    </div>
  );
}
