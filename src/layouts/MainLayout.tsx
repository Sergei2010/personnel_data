import React from 'react';
import { Link, Outlet, useMatch } from 'react-router-dom';

const MainLayout = () => {
  const match = useMatch('/personnels');
  return (
    <div className="wrapper">
      <div className="main-layout">
        <Link to={match === null ? '/personnels' : '/'}>
          <h1>MainLayout</h1>
        </Link>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
