import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./pages/Login/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard/Index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'
import './utils.css'
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import "bootstrap/dist/js/bootstrap.min.js";import Home from "./pages/Home";

