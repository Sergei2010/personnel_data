import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import PersonnelsPage from './pages/PersonnelsPage';
import PersonnelPage from './pages/PersonnelPage';
import PersonnelPageEdit from './pages/PersonnelPageEdit';

import './scss/app.scss';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="personnels" element={<PersonnelsPage />} />
          <Route path="personnels/:id" element={<PersonnelPage />} />
          <Route path="personnels/:id/edit" element={<PersonnelPageEdit />} />
          <Route path="*" element={<h1>Not found ...</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
