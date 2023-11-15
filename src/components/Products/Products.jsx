import Product from "./Product/Product";
import "./Product.css";

const products = [
  {
    id: 1,
    image: "",
    title: "Cybertruck",
    description: "Description of Product 1",
    price: 19.99,
  },
  {
    id: 2,
    image: "",
    title: "Model S",
    description: "Description of Product 2",
    price: 29.99,
  },
  {
    id: 3,
    image: "",
    title: "Model X",
    description: "Description of Product 3",
    price: 39.99,
  },
  {
    id: 4,
    image: "",
    title: "Charger",
    description: "Description of Product 4",
    price: 49.99,
  },
  {
    id: 5,
    image: "",
    title: "Cybertruck",
    description: "Description of Product 5",
    price: 59.99,
  },
  {
    id: 6,
    image: "",
    title: "Model S",
    description: "Description of Product 6",
    price: 69.99,
  },
];

const Products = () => {
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

export default Products;
