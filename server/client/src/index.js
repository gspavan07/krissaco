import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Products from "./screens/Products";
import Services from "./screens/Services";
import Careers from "./screens/Careers";
import Contact from "./screens/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/careers",
    element: <Careers />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    // errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
