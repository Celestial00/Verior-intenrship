import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart, AddItem, DeleteItem } = useContext(CartContext);
  return (
    <>
    
     <div className="max-w-5xl mx-auto mt-6">
      <h1 className="text-[20px] mb-10">Cart items will be shown here

      </h1>
       {cart.map((item) => (
        <CartItem item={item} />
      ))}
     </div>
     
    </>
  );
}
