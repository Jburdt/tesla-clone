<<<<<<< HEAD
import React from 'react'

const Cart = () => {
  return (
    <h1>Cart</h1>
  )
}

export default Cart
=======
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((store) => store.cartItems);

  if (cart.length === 0) {
    return <div>THere are no items in the cart.</div>
  }
  return(
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, idx) => (
          <li key={`${item.id}- ${idx}`}>{item.name}</li>
        ))}
      </ul>
      <button>Buy Everything</button>
    </div>
  ) 
};

export default Cart;
>>>>>>> cart
