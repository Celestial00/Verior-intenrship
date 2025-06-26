import { useId } from "react";
import ProductBox from "../components/ProductBox";

export default function Home() {
  const products = [
    {
      title: "Nike Air Max 270",
      description: "A lightweight, breathable shoe with superior cushioning.",
      image:
        "https://images.pexels.com/photos/4252951/pexels-photo-4252951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Sony WH-1000XM4",
      description:
        "Industry-leading noise cancellation with long battery life.",
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: 'MacBook Pro 14"',
      description: "Powerful performance with the Apple M1 Pro chip.",
      image:
        "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center p-6">
        {products.length < 1 ? (
          <h1> No Products</h1>
        ) : (
          products.map((pro) => (
            <ProductBox
              key={useId()}
              image={pro.image}
              title={pro.title}
              description={pro.description}
            />
          ))
        )}
      </div>
    </>
  );
}
