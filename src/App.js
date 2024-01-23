import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";
import Brands from "./pages/Brands";
import Categories from "./pages/Categories";
import CategoriesDetail from "./components/CategoriesDetail";
import Catalogs from "./pages/Catalogs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SingleBrand from "./pages/SingleBrand";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
  },
]);

export const App = () => {


  return <RouterProvider router={router} />
}