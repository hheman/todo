import React from 'react';
import { NavLink } from 'react-router';
import Nav from 'react-bootstrap/Nav';

const AppNav = () => {
  return (
    <Nav as="ul" variant="pills" defaultActiveKey="" className="my-2">
      <Nav.Item as="li">
        <NavLink
          className="nav-link"
          activeClassName="active"
          exact="true"
          to="/"
        >
          Home
        </NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink className="nav-link" activeClassName="active" to="/items">
          Items
        </NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default AppNav;
