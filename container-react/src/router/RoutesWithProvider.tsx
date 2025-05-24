import React, { Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RoutesList from "./routes";
import Nav from "../components/nav/Nav";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Outlet />
      </Suspense>
    ),
    children: RoutesList,
  },
]);
const RoutesWithProvider = () => {
  return <RouterProvider router={router} />;
};

export default RoutesWithProvider;
