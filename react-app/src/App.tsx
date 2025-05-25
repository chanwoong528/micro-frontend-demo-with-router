import {
  createBrowserRouter,
  createMemoryRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import RoutesList from "./routes";
import Nav from "./components/Nav";

import "./App.css";
import { Suspense } from "react";

const createRouter = (type: "browser" | "memory") => {
  if (type === "browser") {
    return createBrowserRouter([
      {
        path: "/react",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        ),

        children: RoutesList,
      },
    ]);
  }
  return createMemoryRouter([
    {
      path: "/react",
      element: <div>React</div>,
      children: RoutesList,
    },
  ]);
};

function App() {
  return <RouterProvider router={createRouter("browser")} />;
}

export default App;
