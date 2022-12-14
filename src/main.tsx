import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizSectionContainer from "./pages/QuizSectionContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:section",
    element: <QuizSectionContainer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<RouterProvider router={router} />);
