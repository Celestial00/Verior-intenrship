import { useEffect, useState } from "react";
import useLocation from "../hooks/useLocation"; // make sure the path is correct
import { useUser } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "ali",
    phone: "",
    address: "",
    priority: false,
  });

  const nav = useNavigate();

  const { SET_Orders, setCart } = useUser();

  const { location, error, fetchLocation } = useLocation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleGetPosition = async () => {
    await fetchLocation();
  };

  useEffect(() => {
    if (location) {
      setFormData((prev) => ({
        ...prev,
        address: location,
      }));
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = SET_Orders(formData.priority);
    setCart([]);
    nav(`/order/${id}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto px-6 py-10 text-stone-800 space-y-6"
    >
      <h2 className="text-xl font-semibold">Ready to order? Let's go!</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="First Name"
        className="w-full rounded-full px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone number"
        className="w-full rounded-full px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <div className="flex gap-2 w-full">
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="flex-1 rounded-full px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="button"
          onClick={handleGetPosition}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-5 py-3 rounded-full text-sm"
        >
          GET POSITION
        </button>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          name="priority"
          checked={formData.priority}
          onChange={handleChange}
          className="w-4 h-4"
        />
        <span>Want to you give your order priority?</span>
      </label>

      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wide"
      >
        ORDER NOW
      </button>
    </form>
  );
}
