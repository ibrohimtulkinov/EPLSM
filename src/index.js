import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";
import Brands from "./pages/Brands";
import Catalogs from "./pages/Catalogs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SingleBrand from "./pages/SingleBrand"
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
  },
  {
    path: "/brands",
    element: <Brands />,
  },
  {
    path: "/catalogs",
    element: <Catalogs />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/singlebrand",
    element: <SingleBrand />,
  }
]);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("root"));   