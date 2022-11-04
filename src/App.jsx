import React from 'react';
import NavigationBar from './components/NavigationBar';
import PersonnelsBlock from './components/PersonnelsBlock';
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
      <PersonnelsBlock />
    </>
  );
}

export default App;
