import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart, buyAllProducts } from "../actions/cartActions";
import "./cart.css";
import toast from "react-hot-toast";

const Cart = () => {
  const cart = useSelector((store) => store.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleBuyEverything = () => {
    toast.success("All itams purchased and on the way!");
    dispatch(buyAllProducts());
  };

  const CartList = (
    <>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div>
              <div>{item.title}</div>
              <div>{item.price}</div>
              <button onClick={() => handleRemoveFromCart(item.id)}>
                Remove From Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleBuyEverything}>Buy Everything</button>
    </>
  );

  const NoItemsInCart = <div>There are no items in the cart.</div>;

  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        {cart.length > 0 ? CartList : NoItemsInCart}
      </div>
    </div>
  );
};

export default Cart;
