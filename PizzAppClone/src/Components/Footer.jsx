import React from "react";
import { useUser } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const { cart } = useUser();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => item.price * item.quantity + sum,
    0
  );

  if (totalItems === 0) return null;

  return (
    <footer className="fixed bottom-0 left-0 w-full shadow-md flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <span>Price: {totalPrice.toFixed(2)} </span>

      <div className="flex items-center gap-4">
        <span className="font-semibold">
          {totalItems} item{totalItems > 1 ? "s" : ""} in cart
        </span>

        <button
          onClick={() => navigate("/cart")}
          className="bg-yellow-400 text-stone-800 font-semibold px-4 py-2 rounded-full text-xs uppercase tracking-wide hover:bg-yellow-300 transition"
        >
          Go to Cart
        </button>
      </div>
    </footer>
  );
}
