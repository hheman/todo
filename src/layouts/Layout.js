import React from 'react';
import { Outlet } from 'react-router';
import Nav from './NavBrandOnly';
import Container from 'react-bootstrap/Container';

const Layout = () => {
  return (
    <Container className="mx-auto" style={{ maxWidth: '600px' }}>
      <Nav />
      <Outlet />
    </Container>
  );
};

export default Layout;
