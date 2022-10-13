import React from 'react';
import { useDispatch } from 'react-redux';
import { setDepartment } from '../../redux/sleces/filterSlice';

import { departamentLinksModified, returnKey } from '../../utils/variables';
import SearchBlock from '../../components/SearchBlock';


const NavigationBar = () => {

  const dispatch = useDispatch();



  const onChangeDepartment = (e) => {
    e.preventDefault();

    let str = e.target.textContent;
    dispatch(setDepartment(returnKey(str)));
  };

  const el = () => document.querySelector('ul > li:first-child div');

  const handlePointerOver = (e) => {
    let res = el();
    if (res && e.target.innerText !== departamentLinksModified[0].title) {
      res.style.backgroundSize = '0% 2px';
    }
    else if (e.target.innerText === departamentLinksModified[0].title) {
      res.style.backgroundSize = '100% 2px';
    }
  };

  const handlePointerOut = (e) => {
    e.preventDefault();
    let res = el();
    if (res && e.target.innerText !== departamentLinksModified[0].title) {
      res.style.backgroundSize = '100% 2px';
    }
  };

  return (
    <div className='wrapper'>
      <div className="spacing-up"></div>
      <div className="title">Поиск</div>
      <SearchBlock />
      <nav className="nav">
        <ul>
          { departamentLinksModified.map((link, index) => {
            return (
              <li
                key={ index }
                onPointerOver={ handlePointerOver }
                onPointerOut={ handlePointerOut }
                onClick={ onChangeDepartment }
              >
                <div>
                  <a href="/">
                    <p>
                      { link }
                    </p>
                  </a>
                </div>
              </li>
            );
          }) }
        </ul>
      </nav>
      <div className="spacing-down"></div>
    </div>
  );
};

export default NavigationBar;
