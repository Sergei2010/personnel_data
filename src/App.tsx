import React from 'react';
import { Routes, Router } from 'react-router-dom';
import PersonnelsContainer from './components/Personnels/PersonnelsContainer';
import PersonnelView from './components/Personnels/PersonnelView';

import NavigationBar from './components/NavigationBar';
import Modal from './components/Modal';
import Sort from './components/Sort';

import './scss/app.scss';

function App() {
  return (
    <>
      <Modal>
        <Sort />
      </Modal>
      <NavigationBar />
      <Routes>
        <Router path="/" element={<PersonnelsContainer />} />
        <Router path="/view/:id?" element={<PersonnelView />} />
      </Routes>
    </>
  );
}

export default App;
