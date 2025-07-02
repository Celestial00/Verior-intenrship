import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  function AddName(Name) {
    setData(Name);
  }

  function GetName() {
    return data;
  }

  function NotInCart(id) {
    return !cart.some((item) => item.id === id);
  }

  function AddToCart(name, price, id, description) {
    let NEW = {
      id,
      name,
      price,
      description,
      quantity: 1,
    };

    setCart((prev) => [...prev, NEW]);
  }

  function getItemQuantity(id) {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  }
  function GetFromCart() {
    return cart;
  }

  function IncreaseQuantity(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function DecreaseQuantity(id) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function RemoveFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }
  function SET_Orders(priority = false) {
    const NEW_ORDER = {
      randomid: uuidv4(),
      Priority: priority,
      Time: Date.now(),
      items: [...cart],
      extraFee: priority ? 10 : 0,
    };

    setOrders((prev) => [...prev, NEW_ORDER]);
    return NEW_ORDER.randomid;
  }

  return (
    <UserContext.Provider
      value={{
        GetName,
        AddName,
        GetFromCart,
        AddToCart,
        NotInCart,
        cart,
        orders,
        IncreaseQuantity,
        DecreaseQuantity,
        getItemQuantity,
        RemoveFromCart,
        setCart,
        SET_Orders,
        setOrders,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
