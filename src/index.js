import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ModelS from "./pages/ModelS";
import Modelx from "./pages/Modelx";
import Roadster from "./pages/Roadster";
import App from "./App";

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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
