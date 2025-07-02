// pages/OrderPage.jsx
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function OrderPage() {
  const [coords, setCoords] = useState(null);
  const [address, setAddress] = useState({ city: "", province: "" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
  });

  const navigate = useNavigate();
  const { state } = useLocation(); // ✅ to receive cart and total from /cart

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      setCoords({ latitude, longitude });

      const apiKey = "9bdac21c4f474c6db728afb4c25e1f78"; // 🔐 Consider using env file
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

      try {
        const res = await axios.get(url);
        const components = res.data.results[0].components;
        const city =
          components.city || components.town || components.village || "";
        const province = components.state || "";

        setAddress({ city, province });
        setFormData((prev) => ({
          ...prev,
          location: `${latitude}, ${longitude}`,
        }));
      } catch (err) {
        console.error("Failed to fetch address:", err);
      }
    });
  }, []);

const handleSubmit = (e) => {
  e.preventDefault();

  const cart = state?.cart || [];
  const total = state?.total || 0;

  const orderSummary = {
    ...formData,
    ...address,
    cart,
    total,
    estimatedDelivery: new Date(Date.now() + 30 * 60000).toLocaleTimeString(),
  };

  navigate("/confirmation", { state: orderSummary }); // ✅ Go to confirmation page
};

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Complete Your Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <div className="w-full p-2 border rounded bg-gray-100">
          <p>
            <strong>Location:</strong> {formData.location || "Fetching..."}
          </p>
          <p>
            <strong>City:</strong> {address.city}
          </p>
          <p>
            <strong>Province:</strong> {address.province}
          </p>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}
