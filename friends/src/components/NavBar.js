import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/NavBar.css';
function NavBar() {

  return (
    <div className="nav-bar">
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/friends">
            Friends
          </Link>
        </li>
        <li>
          <Link className="nav-link">Log Out</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;