import React from 'react';
import PersonnelsContainer from './components/Personnels/PersonnelsContainer';
//import PostContainer from './components/PostContainer';

import NavigationBar from './components/NavigationBar';
//import PersonnelsBlock from './components/PersonnelsBlock';
import Modal from './components/Modal';
import Sort from './components/Sort';

//import { useAppDispatch, useAppSelector } from './hooks/redux';

import './scss/app.scss';
//import { fetchUsers } from './store/reducers/ActionCreators';

function App() {
  //const dispatch = useAppDispatch();
  //const { users, isLoading, error } = useAppSelector((state) => state.userReducer);

  /* React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]); */

  return (
    <>
      {/* {isLoading && <h1>Идёт загрузка ...</h1>}
      {error && <h1>{error}</h1>}
      <div className="App">{JSON.stringify(users, null, 2)}</div>
 */}

      <Modal>
        <Sort />
      </Modal>
      <NavigationBar />
      <PersonnelsContainer />
    </>
  );
}

export default App;
