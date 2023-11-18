import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ModelS from "./pages/ModelS";
import Modelx from "./pages/Modelx";
import Roadster from "./pages/Roadster";
import App from "./App";
import Shop from "./pages/Shop";
import { Provider } from "react-redux";
import { createStore } from "redux";
import cartReducer from "./components/reducers/cartReducer";
import Cart from "./components/cart/Cart";

const store = createStore(cartReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <HomePage />
      </App>
    ),
  },
  {
    path: "/model_s",
    element: (
      <App>
        <ModelS />
      </App>
    ),
  },
  {
    path: "/model_x",
    element: (
      <App>
        <Modelx />
      </App>
    ),
  },
  {
    path: "/roadster",
    element: (
      <App>
        <Roadster />
      </App>
    ),
  },
  {
    path: "/shop",
    element: (
      <App>
        <Shop />
      </App>
    ),
  },
  {
    path: "/cart",
    element: (
      <App>
        <Cart />
      </App>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
