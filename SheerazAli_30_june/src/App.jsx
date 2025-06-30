import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  increaseQty,
  decreaseQty,
} from "./redux/cartSlice";

const dummyItems = [
  { id: 1, name: "Apple", price: 2 },
  { id: 2, name: "Banana", price: 1 },
  { id: 3, name: "Orange", price: 3 },
];

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const isInCart = (id) => cart.find((item) => item.id === id);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-20">
        <div className=" text-2xl font-semibold ">Sheeraz Food App</div>

        <div className=" p-2 text-sm bg-gray-800 cursor-pointer text-white rounded-sm  ">
          {" "}
          refresh
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Product List */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          <ul className="space-y-4">
            {dummyItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-4 bg-white rounded shadow"
              >
                <span>
                  {item.name} - ${item.price}
                </span>
                <button
                  disabled={isInCart(item.id)}
                  onClick={() => dispatch(addItem(item))}
                  className={`px-3 py-1 rounded ${
                    isInCart(item.id)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gray-800"
                  } text-white`}
                >
                  {isInCart(item.id) ? "Added" : "Add"}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Cart */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="p-4 bg-white rounded shadow space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{item.name}</span>
                      <button
                        onClick={() => dispatch(removeItem(item.id))}
                        className="text-sm px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Unit Price: ${item.price}</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => dispatch(decreaseQty(item.id))}
                          className="px-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                          -
                        </button>
                        <span className="w-6 text-center">{item.qty}</span>
                        <button
                          onClick={() => dispatch(increaseQty(item.id))}
                          className="px-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-medium">
                        Total: ${item.qty * item.price}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Grand Total */}
              <div className="mt-6 p-4 bg-white rounded shadow flex justify-between text-xl font-semibold">
                <span>Total Amount</span>
                <span>${totalAmount}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
