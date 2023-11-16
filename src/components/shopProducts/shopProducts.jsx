import React from "react";
import Product from "../product/product";
import modelX from "../../assets/model-x.jpg";
import modelS from "../../assets/modelS.jpg";
import roadster from "../../assets/roadster.jpg";

const products = [
  {
    id: 1,
    image: roadster,
    title: "Cybertruck",
    description: "Description of Product 1",
    price: 19.99,
  },
  {
    id: 2,
    image: modelS,
    title: "Model S",
    description: "Description of Product 2",
    price: 29.99,
  },
  {
    id: 3,
    image: modelX,
    title: "Model X",
    description: "Description of Product 3",
    price: 39.99,
  },
  {
    id: 4,
    image: roadster,
    title: "Roadster",
    description: "Description of Product 4",
    price: 49.99,
  },
  {
    id: 5,
    image: modelX,
    title: "Model X",
    description: "Description of Product 5",
    price: 59.99,
  },
  {
    id: 6,
    image: modelS,
    title: "Model S",
    description: "Description of Product 6",
    price: 69.99,
  },
];

const shopProducts = () => {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default shopProducts;
