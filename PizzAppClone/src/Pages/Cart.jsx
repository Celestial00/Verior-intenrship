import React from "react";
import { useUser } from "../Context/UserContext"; 
import { Link } from "react-router-dom";

export default function CartPage() {
  const {
    cart,
    IncreaseQuantity,
    DecreaseQuantity,
    RemoveFromCart,
    GetName,
    setCart,
  } = useUser();

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


  if (cart.length < 1) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-8 text-stone-800 min-h-screen">
        <Link
          to="/menu"
          className="text-sm text-blue-500 hover:underline mb-4 inline-block"
        >
          &larr; Back to menu
        </Link>
        <h1 className="text-lg font-semibold">
          Your cart is still empty. Start adding some pizzas :)
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-8 text-stone-800 min-h-screen">
      <Link
        to="/menu"
        className="text-sm text-blue-500 hover:underline mb-4 inline-block"
      >
        &larr; Back to menu
      </Link>

      <h2 className="text-xl font-semibold mb-6">Your cart, {GetName()}</h2>

      <ul className="space-y-4 mb-8">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b pb-3"
          >
            <div className="flex flex-col">
              <span className="font-semibold">
                {item.quantity}× {item.name}
              </span>
              <span className="text-gray-600 font-medium text-sm mt-0.5">
                €{(item.price * item.quantity).toFixed(2)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => DecreaseQuantity(item.id)}
                className="text-sm rounded-full bg-yellow-400 font-semibold text-black px-3 py-1 hover:bg-yellow-300 focus:outline-none"
              >
                -
              </button>
              <span className="text-sm font-medium">{item.quantity}</span>
              <button
                onClick={() => IncreaseQuantity(item.id)}
                className="text-sm rounded-full bg-yellow-400 font-semibold text-black px-3 py-1 hover:bg-yellow-300 focus:outline-none"
              >
                +
              </button>
              <button
                onClick={() => RemoveFromCart(item.id)}
                className="text-sm rounded-full bg-yellow-400 font-semibold text-black px-4 py-1 hover:bg-yellow-300 focus:outline-none"
              >
                DELETE
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 mt-8">
        <Link to="/form">
          <button className="bg-yellow-400 text-stone-800 font-bold px-6 py-3 rounded-full text-sm tracking-wide uppercase hover:bg-yellow-300 focus:outline-none">
            Order Pizzas
          </button>
        </Link>

        <button
          onClick={clearCart}
          className="bg-gray-100 text-gray-400 font-bold px-6 py-3 rounded-full text-sm tracking-wide uppercase cursor-pointer"
        >
          Clear Cart
        </button>
      </div>

      <div className="text-right font-semibold text-lg mt-6">
        Total: €{total.toFixed(2)}
      </div>
    </div>
  );
}
