import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/SingleProduct",
    element: <SingleProduct />,
  }
]);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("root"));   