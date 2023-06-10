import { DevTools } from "jotai-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import "~/index.css";
import ErrorPage from "~/pages/ErrorPage";
import HomePage from "~/pages/HomePage";
import SuperpowersPage from "~/SuperpowersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/superpowers",
    element: <SuperpowersPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <DevTools theme="dark" />
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);
