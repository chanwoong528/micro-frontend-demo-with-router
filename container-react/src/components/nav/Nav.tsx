import React from "react";

import RoutesList from "../../router/routes";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <ul>
        {RoutesList.filter((route) => route.data?.showNav).map((route) => (
          <li key={route.path}>
            <Link to={route.navPath ? route.navPath : route.path}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
