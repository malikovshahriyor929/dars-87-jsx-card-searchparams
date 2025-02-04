import React  from "react";
import { createBrowserRouter } from "react-router-dom";
let  Card = React.lazy(() => import("../components/card"));
let Filter = React.lazy(() => import( "../components/filter"));

export let Rootes = createBrowserRouter([
  {
    path: "/",
    element: <Card />,
  },
  {
    path: "/filter",
    element: <Filter />,
  },
]);
