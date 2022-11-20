import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PersonnelsContainer from './components/Personnels/PersonnelsContainer';
import PersonnelView from './components/Personnels/PersonnelView';
import NavigationBar from './components/NavigationBar';
import Modal from './components/Modal';
import Sort from './components/Sort';

import './scss/app.scss';

const App = () => {
  return (
    <>
      <Modal>
        <Sort />
      </Modal>
      <NavigationBar />
      <Routes>
        <Route path="personnels" element={<PersonnelsContainer />} />
        <Route path="/personnels/:id" element={<PersonnelView />} />
      </Routes>
    </>
  );
};

export default App;
