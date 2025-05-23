
import PageHome from "./page/PageHome";
import PageAbout from "./page/PageAbout";


const RoutesList = [
  
  {
    path: "/react",
    name: "Home",
    element: <PageHome />
  },
  {
    path: "/react/about",
    name: "About",
    element: <PageAbout />
  }
]

export default RoutesList