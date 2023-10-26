import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage';
import ModelS from './pages/ModelS';
import Modelx from './pages/Modelx';
import Cybertruck from './pages/Cybertruck';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/model_s",
    element: <ModelS />
  },
  {
    path: "/model_x",
    element: <Modelx />
  },
  {
    path: "/cybertruck",
    element: <Cybertruck />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
