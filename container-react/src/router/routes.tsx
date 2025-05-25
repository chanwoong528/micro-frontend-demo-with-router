import Home from "../page/Home";
import AngularWrapper from "../components/wrapper/AngularWrapper";

import ReactRoutesList from "reactApp/RoutesList";

const RoutesList = [
  {
    path: "/",
    navPath: "/",
    name: "Home",
    element: <Home />,
    data: {
      showNav: true,
    },
  },
  {
    path: "/angular/*",
    navPath: "/angular",
    name: "AngularRemote",
    element: <AngularWrapper />,
    data: {
      showNav: true,
    },
  },
  {// remote React - shell react  just need to add routes
    path: "/react/*",
    navPath: "/react",
    name: "ReactRemote",
    data: {
      showNav: true,
    },
  },
  ...ReactRoutesList,
];

export default RoutesList;
