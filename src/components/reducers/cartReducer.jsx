const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedCart = [...state.cartItems, action.payload];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cartItems: updatedCart,
      };
    case "REMOVE_FROM_CART":
      const newCart = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cartItems: newCart,
      };
    case "EMPTY_CART":
      localStorage.removeItem("cart");
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
