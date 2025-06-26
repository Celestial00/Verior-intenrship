import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductBox = ({ image, title, description }) => {
  const { AddItem } = useContext(CartContext);

  const handle = () => {
    AddItem(title);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-sm">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={handle}
            className="bg-black cursor-pointer text-white p-2 rounded-md transition"
          >
            🛒
          </button>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProductBox;
