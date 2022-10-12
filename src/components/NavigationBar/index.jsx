import React from 'react';
import { useDispatch } from 'react-redux';
import { setDepartment } from '../../redux/sleces/filterSlice';

import searchIcon from '../../assets/Vector.svg';
import listIcon from '../../assets/list-ui-alt.svg';


const NavigationBar = () => {
  const links = [
    { id: 1, title: 'Всё' },
    { id: 2, title: 'Designers' },
    { id: 3, title: 'Analysts' },
    { id: 4, title: 'Managers' },
    { id: 5, title: 'iOS' },
    { id: 6, title: 'Android' },
  ];
  //const department = useSelector((state) => state.filter.department);
  const dispatch = useDispatch();

  const onChangeDepartment = (e) => {
    e.preventDefault();
    dispatch(setDepartment(e.target.textContent));
  };

  const el = () => document.querySelector('ul > li:first-child div');

  const handlePointerOver = (e) => {
    let res = el();
    if (res && e.target.innerText !== links[0].title) {
      res.style.backgroundSize = '0% 2px';
    }
    else if (e.target.innerText === links[0].title) {
      res.style.backgroundSize = '100% 2px';
    }
  };

  const handlePointerOut = (e) => {
    e.preventDefault();
    let res = el();
    if (res && e.target.innerText !== links[0].title) {
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
          { links.map((link) => {
            return (
              <li
                key={ link.id }
                onPointerOver={ handlePointerOver }
                onPointerOut={ handlePointerOut }
                onClick={ onChangeDepartment }
              >
                <div>
                  <a href="/">
                    <p>
                      { link.title }
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
