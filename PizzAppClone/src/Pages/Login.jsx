import React, { useEffect, useState } from "react";
import { useUser } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState("");
  const [isEmpty, setEmpty] = useState(true);
  const { setDataFromUser } = useUser() || {}; // ✅ use custom hook
  const nav = useNavigate();

  const handleInput = (e) => {
    setData(e.target.value);
  };

  useEffect(() => {
    setEmpty(data === "");
  }, [data]);

  const HandleClick = () => {
    console.log("Saving user:", data);
    setDataFromUser(data); // ✅ Save to context and localStorage
    nav("/menu");
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="flex flex-col items-center">
        <p className="text-xl font-semibold md:text-3xl">The Best Pizza</p>
        <p className="text-yellow-500 text-3xl">
          Straight out of the oven, straight to you.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <p className="mb-4 text-sm text-stone-600 md:text-base">
          👋 Welcome! Please start by telling us your name:
        </p>
        <input
          onChange={handleInput}
          type="text"
          placeholder="full name"
          className="w-80 rounded-full px-4 py-2 text-sm transition-all duration-300 focus:outline-none placeholder:text-stone-400 border border-stone-300 bg-white"
        />

        {!isEmpty && (
          <button
            onClick={HandleClick}
            className="mt-10 text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-4 py-3 md:px-6 md:py-4"
          >
            Start ordering
          </button>
        )}
      </div>
    </div>
  );
}
