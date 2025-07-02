import React from "react";
import { useUser } from "../Context/UserContext";
import { useNavigate } from "react-router-dom"; // ✅ ADD THIS

export default function Cart() {
  const {
    getData,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
    setDataFromUser,
  } = useUser();

  const navigate = useNavigate(); // ✅ INIT HERE

  const cart = getData().cart || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const handleClearCart = () => {
    const existing = getData();
    setDataFromUser(existing.name); // resets cart & order with same name
  };

  const handleOrder = () => {
    navigate("/order");
  };

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center text-xl text-stone-600">
        Your cart is empty 😢
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>

      <ul className="space-y-6">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image || "https://via.placeholder.com/100"}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm italic text-stone-500">
                  {item.description}
                </p>
                <p className="text-sm text-stone-600">
                  Price: ${item.price.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="px-2 py-1 rounded-full bg-yellow-300 text-stone-800 font-bold"
              >
                -
              </button>
              <span className="font-semibold">{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="px-2 py-1 rounded-full bg-yellow-300 text-stone-800 font-bold"
              >
                +
              </button>
              <button
                onClick={() => deleteFromCart(item.id)}
                className="ml-4 px-3 py-1 rounded-full bg-red-500 text-white text-sm"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 border-t pt-6 text-right">
        <p className="text-lg font-semibold mb-2">
          Total Items: <span className="text-stone-700">{totalItems}</span>
        </p>
        <p className="text-lg font-semibold">
          Total Price:{" "}
          <span className="text-green-600">${totalPrice.toFixed(2)}</span>
        </p>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition"
          >
            Clear Cart
          </button>
          <button
            onClick={handleOrder}
            className="bg-yellow-400 text-stone-800 font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition"
          >
            Order Pizzas
          </button>
        </div>
      </div>
    </div>
  );
}
``;
