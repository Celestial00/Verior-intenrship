import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const check = (item) => {
    return cart.includes(item);
  };

  const AddItem = (item) => {
    if (check(item)) {
      alert("item already exists");
      return;
    }
    setCart([...cart, item]);
    alert("Item Added");
  };

  const DeleteItem = (Item) => {
    setCart(cart.filter((item) => item === Item));
  };

  return (
    <CartContext.Provider value={{ cart, AddItem, DeleteItem }}>
      {children}
    </CartContext.Provider>
  );
}
