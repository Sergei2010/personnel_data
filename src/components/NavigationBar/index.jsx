import React from 'react';
import { useDispatch } from 'react-redux';
import { setDepartment } from '../../redux/sleces/filterSlice';

import { departmentLinksModified } from '../../utils/variables';

import searchIcon from '../../assets/Vector.svg';
import listIcon from '../../assets/list-ui-alt.svg';


const NavigationBar = () => {

  //console.log('links: ', links);
  //console.log('departmentLinks: ', departmentLinks);
  //console.log('departmentLinksModified: ', departmentLinksModified);

  //const department = useSelector((state) => state.filter.department);
  const dispatch = useDispatch();

  const onChangeDepartment = (e) => {
    e.preventDefault();
    dispatch(setDepartment(e.target.textContent));
  };

  const el = () => document.querySelector('ul > li:first-child div');

  const handlePointerOver = (e) => {
    let res = el();
    if (res && e.target.innerText !== departmentLinksModified[0].title) {
      res.style.backgroundSize = '0% 2px';
    }
    else if (e.target.innerText === departmentLinksModified[0].title) {
      res.style.backgroundSize = '100% 2px';
    }
  };

  const handlePointerOut = (e) => {
    e.preventDefault();
    let res = el();
    if (res && e.target.innerText !== departmentLinksModified[0].title) {
      res.style.backgroundSize = '100% 2px';
    }
  };

  return (
    <div className='wrapper'>
      <div className="spacing-up"></div>
      <div className="title">Поиск</div>
      <div className="search">
        <div className="search-content-left">
          <p>
            <img src={ searchIcon } alt="Search" />
          </p>
          <input type="text" placeholder="Введите имя, тег, почту ..." />
        </div>
        <div className="search-content-right">
          <img src={ listIcon } alt="ListIcon" />
        </div>
      </div>
      <nav className="nav">
        <ul>
          { departmentLinksModified.map((link, index) => {
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
