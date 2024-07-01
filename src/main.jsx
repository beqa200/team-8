import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Personal from "./Pages/Personal.jsx";
import Education from "./Pages/Education.jsx";
import Experience from "./Pages/Experience.jsx";
import Resume from "./Pages/Resume.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/personal",
    element: <Personal />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
