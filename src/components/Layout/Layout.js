import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className=" d-flex justify-content-center mt-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
