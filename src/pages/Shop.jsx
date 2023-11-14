import React from "react";
import Product from "../components/product/product";
import roadster from '../assets/roadster.jpg'

const Shop = () => {
  return (
    <div className="container shop-page">
      <h1>Products</h1>
      <Product
        image={roadster}
        title="Product Title"
        description="Product Description"
        price={19.99}
      />
    </div>
  );
};

export default Shop;
