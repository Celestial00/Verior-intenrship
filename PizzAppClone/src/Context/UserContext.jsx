import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : {};
    } catch (err) {
      console.error("Failed to parse localStorage user data:", err);
      return {};
    }
  });


  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      localStorage.setItem("user", JSON.stringify(data));
    }
  }, [data]);

  function setDataFromUser(name) {
    const dataObj = { name, location: "", cart: [], order: [] };
    setData(dataObj);
  }

  function getData() {
    return data;
  }

  function addToCart(item) {
    const existing = data.cart.find((p) => p.id === item.id);
    let updatedCart;

    if (existing) {
      updatedCart = data.cart.map((p) =>
        p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
      );
    } else {
      updatedCart = [...data.cart, { ...item, quantity: 1 }];
    }

    const updatedData = { ...data, cart: updatedCart };
    setData(updatedData);
  }

  function increaseQuantity(id) {
    const updatedCart = data.cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setData({ ...data, cart: updatedCart });
  }

  function decreaseQuantity(id) {
    let updatedCart = data.cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);

    setData({ ...data, cart: updatedCart });
  }

  function deleteFromCart(id) {
    const updatedCart = data.cart.filter((item) => item.id !== id);
    setData({ ...data, cart: updatedCart });
  }
  return (
    <UserContext.Provider
      value={{
        getData,
        setDataFromUser,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        deleteFromCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Helper hook to use context
const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
