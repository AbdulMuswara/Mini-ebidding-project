import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Authentication from "./pages/Authentication";
import AdminDash from "./pages/AdminDash";
import Listings from "./pages/Listings";
import Suspended from "./pages/Suspended";
//import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddListing from "./pages/AddListing";
import Rating from "./pages/Rating";
import Transaction from "./pages/Transaction";
import Special from "./pages/Special";

const router = createBrowserRouter([
  //{ path: "/", element: <LandingPage /> },
  {
    path: "",
    element: <App />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "auth",
    element: <Authentication />,
  },
  {
    path: "admin",
    element: <AdminDash />,
  },
  {
    path: "listings",
    element: <Listings />,
  },
  {
    path: "add-listing",
    element: <AddListing />,
  },
  {
    path: "buy",
    element: <Transaction />,
  },
  {path: "rating",
    element: <Rating />,
  },
  {
    path: "suspended",
    element: <Suspended />,
  },
  {
    path: "special",
    element: <Special />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
