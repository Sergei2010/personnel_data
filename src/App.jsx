import React from 'react';
import Skeleton from './components/PersonnelBlock/Skeleton';
import NavigationBar from './components/NavigationBar';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <NavigationBar />
      {[...new Array(6)].map((item, index) => {
        return (
          <div key={index}>
            <Skeleton />
          </div>
        );
      })}
    </div>
  );
}

export default App;
