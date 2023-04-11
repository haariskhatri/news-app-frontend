import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Rewards from "./pages/Rewards";

import reportWebVitals from "./reportWebVitals";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  {
    path:"/login",
    element: <LoginPage/>
  },

  {
    path:'/rewards',
    element:<Rewards/>
  }

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
