import React from "react";

import RoutesList from "../../router/routes";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <ul>
        {RoutesList.map((route) => (
          <li key={route.path}>
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
