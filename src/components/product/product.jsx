import "./product.css";
import { useSelector } from "react-redux";
import cartReducer from "../reducers/cartReducer";


const Product = ({ image, title, description, price }) => {
  const cart = useSelector((cartReducer) => cartReducer);
  // const { image, title, description, price } = product

  console.log(cart, "in product")

  // const addToCart = (product) => {
  //   ...cart, product 
  // }

  return (
    <div className="product">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">{price}</p>
      <button className="product-button" onClick={()=>{console.log('hi')}}>Add To Cart</button>
    </div>
  );
};

export default Product;
