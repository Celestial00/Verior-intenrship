import React, { useEffect, useState } from "react";
import { useUser } from "../Context/UserContext";
import { useParams } from "react-router-dom";

export default function OrderStatus() {
  const { id } = useParams();
  const { orders, setOrders } = useUser();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const found = orders.find((o) => o.randomid === id);
    setOrder(found);
  }, [orders, id]);

  if (!order) {
    return (
      <div className="min-h-screen p-6 text-center text-red-500 font-semibold">
        Order not found.
      </div>
    );
  }

  const timeToDel = order.items.length * 10 - (order.Priority ? 5 : 0);
  const deliveryTimestamp = new Date(order.Time + timeToDel * 60 * 1000);
  const baseTotal = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = order.Priority ? baseTotal + 10 : baseTotal;

  const makePriority = () => {
    setOrders((prev) =>
      prev.map((o) => (o.randomid === id ? { ...o, Priority: true } : o))
    );
  };

  return (
    <div className="min-h-screen flex flex-col p-6">
      <div className="rounded-2xl w-full max-w-6xl p-6 mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">
            Order <span className="text-gray-600">{id}</span> status
          </h2>
          <span className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full">
            PREPARING ORDER
          </span>
        </div>

        <div className="bg-gray-100 rounded-lg px-4 py-3 mb-4">
          <p className="text-sm text-gray-700">
            Estimated delivery in {timeToDel} minutes
          </p>
          <p className="text-xs text-gray-500">
            Estimated time: {deliveryTimestamp.toLocaleTimeString()}
          </p>
        </div>

        <div className="mb-4">
          {order.items.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between border-b pb-2 mb-2">
                <span className="font-medium">
                  {item.quantity}× {item.name}
                </span>
                <span className="font-medium">
                  €{(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-gray-500 italic mb-3">
                {item.description || "Tomato, Mozzarella, Basil"}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border-t pt-4 mt-4">
          <div className="flex justify-between font-semibold">
            <span>Price of pizzas:</span>
            <span>€{baseTotal.toFixed(2)}</span>
          </div>

          {order.Priority && (
            <div className="flex justify-between font-semibold text-sm mt-1">
              <span>Priority Fee:</span>
              <span>€10.00</span>
            </div>
          )}

          <div className="flex justify-between text-lg font-bold mt-2">
            <span>To pay on delivery:</span>
            <span>€{total.toFixed(2)}</span>
          </div>
        </div>

        {!order.Priority && (
          <div className="flex justify-end mt-6">
            <button
              onClick={makePriority}
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded-full"
            >
              MAKE PRIORITY
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
