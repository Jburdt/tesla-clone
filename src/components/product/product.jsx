import "./product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

const Product = (product) => {
  const { image, title, description, price } = product
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">{price}</p>
      <button
        className="product-button"
        onClick={() => {
          handleAddToCart();
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
