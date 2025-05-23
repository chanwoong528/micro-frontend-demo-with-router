
import React from 'react'
import { Link } from 'react-router-dom'
import RoutesList from '../routes'

const Nav = () => {
  return (
    <nav>
      <ul>
        {RoutesList.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav