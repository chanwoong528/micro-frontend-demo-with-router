import React from "react";

import RoutesList from "../../router/routes";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <ul>
        {RoutesList.filter((route) => route.data?.showNav).map((route) => (
          <li key={route.path}>
            <a href={route.navPath ? route.navPath : route.path}>
              {route.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
