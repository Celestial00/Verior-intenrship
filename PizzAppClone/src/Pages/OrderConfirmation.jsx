// pages/OrderConfirmation.jsx
import { useLocation } from "react-router-dom";

export default function OrderConfirmation() {
  const { state } = useLocation();
  if (!state) return <p>No order found.</p>;

  const { name, phone, location, city, province, cart, estimatedDelivery } =
    state;

  // ✅ fallback total if not passed from previous page
  const total =
    state?.total ||
    cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🎉 Order Confirmed!</h2>

      <div className="mb-4 space-y-1">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>City:</strong> {city}</p>
        <p><strong>Province:</strong> {province}</p>
        <p><strong>Location:</strong> {location}</p>
      </div>

      <h3 className="mt-6 text-xl font-semibold mb-2">🧾 Your Order</h3>
      <ul className="space-y-1 text-stone-700">
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} × {item.quantity} — ${(
              item.price * item.quantity
            ).toFixed(2)}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-lg font-bold">
        Total: <span className="text-green-600">${total.toFixed(2)}</span>
      </p>
      <p className="mt-2 text-stone-600">
        🕒 Expected by: <strong>{estimatedDelivery}</strong>
      </p>
    </div>
  );
}
