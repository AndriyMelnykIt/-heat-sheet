import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/system';

const Layout = () => {
  return (
    <Container maxWidth="lg">
      <header></header>
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </Container>
  );
};

export default Layout;
