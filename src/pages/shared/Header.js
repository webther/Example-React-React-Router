import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/example">Example</Link>
            <ul>
              <li>
                <Link to="/example/example1">Example 1</Link>
              </li>
              <li>
                <Link to="/example/example2">Example 2</Link>
              </li>
              <li>
                <Link to="/example/example3">Example 3</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
            <ul>
              <li><Link to="/dashboard/introduction">Introduction</Link></li>
              <li><Link to="/dashboard/123">User's dashboard</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
