import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user)

  return (
    <header>
      <nav className={'main-menu'}>
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
          <li className={'item-user'}>
            {!user.uid ? (
              <Link to="/user/login">Log in</Link>
              ) : <><span className={'welcome'}>[Welcome, {user.username}]</span> <Link to="/user/logout">Log out</Link></>
            }
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
