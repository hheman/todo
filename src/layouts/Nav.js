import React from 'react';
import { NavLink } from 'react-router';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact="true" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/items">Items</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
