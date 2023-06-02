import React from 'react';
import { Outlet } from 'react-router';
import Nav from './Nav';
import Container from 'react-bootstrap/Container';

const Layout = () => {
  return (
    <Container>
      <Nav />
      <Outlet />
    </Container>
  );
};

export default Layout;
