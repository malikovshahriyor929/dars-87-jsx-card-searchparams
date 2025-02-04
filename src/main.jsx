import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Rootes } from "./routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={Rootes} />
    </Suspense>
  </StrictMode>
);
