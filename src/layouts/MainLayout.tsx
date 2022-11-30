import React from 'react';
import { Link, Outlet, useMatch } from 'react-router-dom';

//import layout from '../assets/layout.svg';

const MainLayout = () => {
  const match = useMatch('/personnels');
  return (
    <div className="wrapper">
      <div className="main-layout">
        <Link to={match === null ? '/personnels' : '/'}>
          <h1>
            <i>Team</i>
          </h1>
          {/* <img src={layout} alt="Team" /> */}
        </Link>
        <div className="content">
          <div className="zero-content"></div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
