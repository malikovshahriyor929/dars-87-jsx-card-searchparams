import { createBrowserRouter } from "react-router-dom";
import Card from "../components/card";
import Filter from "../components/filter";

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
