import React from "react";
import { useUser } from "../Context/UserContext";

export default function Item({ data }) {
  const {
    getData,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
  } = useUser();

  const cartItem = getData().cart.find((item) => item.id === data.id);

  return (
    <li className="flex w-full py-2">
      <img
        src={
          "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg"
        }
        alt={data.name}
        className={`h-24 mr-2 ${data.quantity < 1 ? "grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{data.name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {data.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-sm">
            {data.quantity < 1 ? "SOLD OUT" : `$${data.price}`}
          </p>

          <div className="flex items-center gap-3 sm:gap-8">
            {!cartItem ? (
              <button
                onClick={() => addToCart(data)}
                className="inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-4 py-2 md:px-5 md:py-2.5 text-xs"
              >
                Add to cart
              </button>
            ) : (
              <>
                <div className="flex items-center gap-2 md:gap-3">
                  <button
                    onClick={() => decreaseQuantity(data.id)}
                    className="inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-2.5 py-1 md:px-3.5 md:py-2"
                  >
                    -
                  </button>
                  <span className="text-sm font-medium">
                    {cartItem.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(data.id)}
                    className="inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-2.5 py-1 md:px-3.5 md:py-2"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => deleteFromCart(data.id)}
                  className="inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-4 py-2 md:px-5 md:py-2.5"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

//https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg
