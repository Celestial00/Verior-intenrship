import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItem({ item }) {
  const { DeleteItem } = useContext(CartContext);

  return (
    <div className="flex justify-between items-center border p-10 rounded-md mb-2">
      <span>{item}</span>
      <button
        onClick={() => DeleteItem(item)}
        className="text-red-500 cursor-pointer  hover:text-red-700 text-[20px]"
      >
        Delete
      </button>
    </div>
  );
}
