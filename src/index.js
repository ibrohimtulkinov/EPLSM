import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";
import Brands from "./pages/Brands";
import Catalogs from "./pages/Catalogs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SingleBrand from "./pages/SingleBrand";
import CategoriesDetail from "./components/CategoriesDetail";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Categories from "./pages/Categories";
import 'react-photo-view/dist/react-photo-view.css';

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
    path: "/single-product/:guid",
    element: <SingleProduct />,
  },
  {
    path: "/brands",
    element: <Brands />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/categories/:guid",
    element: <CategoriesDetail />,
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
    path: "/singlebrand/:guid",
    element: <SingleBrand />,
  }
]);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("root"));   