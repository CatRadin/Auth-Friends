import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom'

function NavBar() {

    const history = useHistory();


    //Logout -------------- Removes Token then reroutes you
    const logout = () => {
        localStorage.removeItem('token');
      history.push('/');
      };

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
          <Link onClick={logout} className="nav-link">Log Out</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;