import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { setdepartment } from '../../store/reducers/FilterSlice';
import { Link } from 'react-router-dom';

import { departmentLinksModified, returnKey, returnLink } from '../../utils/variables_functions';
import SearchBlock from '../SearchBlock';

const NavigationBar = () => {
  let str: string | undefined = useAppSelector((state) => state.filterReducer.department);
  const dispatch = useAppDispatch();

  str = returnLink(str);

  const [activeIdMouseInter, setActiveIdMouseInter] = React.useState(str);
  React.useEffect(() => {
    setActiveIdMouseInter(str);
  }, [str]);
  const [activeIdClick, setActiveIdClick] = React.useState('');
  const [clickEvent, setClickEvent] = React.useState(false);

  const handleMouseEnter = (e: React.MouseEvent) => {
    e.preventDefault();
    if (
      !clickEvent &&
      (e.target as HTMLInputElement).nodeName === 'DIV' &&
      (e.target as HTMLInputElement).id !== activeIdMouseInter
    ) {
      setActiveIdMouseInter((e.target as HTMLInputElement).id);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!clickEvent && activeIdMouseInter !== 'Всё') {
      setActiveIdMouseInter('Всё');
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setClickEvent(true);
    setActiveIdMouseInter('');
    let link = e.target ? (e.target as HTMLInputElement).textContent : '';
    setActiveIdClick(link ? link : '');
    let str = returnKey(link ? link : '');
    dispatch(setdepartment(str));
  };

  return (
    <div className="wrapper">
      <div className="spacing-up"></div>
      <div className="title">Поиск</div>

      <SearchBlock />

      <nav className="nav">
        <ul>
          {departmentLinksModified.map((link: string | number) => {
            return (
              <li key={link}>
                <div
                  id={typeof link === 'string' ? link : ''}
                  className={`nav-div ${
                    activeIdMouseInter === link || activeIdClick === link ? 'nav-div-active' : ''
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <Link to="/" onClick={handleClick}>
                    {link}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="spacing-down"></div>
    </div>
  );
};

export default NavigationBar;
