import Home from "../page/Home";
import AngularWrapper from "../components/wrapper/AngularWrapper";

const RoutesList = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/angular",
    name: "AngularRemote",
    element: <AngularWrapper />,
  },
];

export default RoutesList;
