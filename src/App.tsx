import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PersonnelsPage from './pages/PersonnelsPage';
import PersonnelPage from './pages/PersonnelPage';

import './scss/app.scss';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="personnels" element={<PersonnelsPage />} />
        <Route path="/personnels/:id" element={<PersonnelPage />} />
      </Routes>
    </>
  );
};

export default App;
