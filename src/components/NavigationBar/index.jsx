import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setdepartment } from '../../redux/slices/filterSlice';
import { Link } from 'react-router-dom';

import { departmentLinksModified, returnKey, returnLink } from '../../utils/variables';
import SearchBlock from '../../components/SearchBlock';


const NavigationBar = () => {

  let str = useSelector(state => state.filter.department);
  const dispatch = useDispatch();

  str = returnLink(str);

  const [activeIdMouseInter, setActiveIdMouseInter] = React.useState(str);
  React.useEffect(() => {
    setActiveIdMouseInter(str);
  }, [str]);
  const [activeIdClick, setActiveIdClick] = React.useState('');
  const [clickEvent, setClickEvent] = React.useState(false);

  const handleMouseEnter = (e) => {
    e.preventDefault();
    if (!clickEvent && e.target.nodeName === 'DIV' && e.target.id !== activeIdMouseInter) {
      setActiveIdMouseInter(e.target.id);
    }
  };

  const handleMouseLeave = (e) => {
    e.preventDefault();
    if (!clickEvent && activeIdMouseInter !== 'Всё') {
      setActiveIdMouseInter('Всё');
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setClickEvent(true);
    setActiveIdMouseInter('');
    let link = e.target.textContent;
    setActiveIdClick(link);
    let str = returnKey(link);
    dispatch(setdepartment(str));
  };

  return (
    <div className='wrapper'>

      <div className="spacing-up"></div>
      <div className="title">Поиск</div>

      <SearchBlock />

      <nav className="nav">
        <ul>
          { departmentLinksModified.map((link) => {
            return (
              <li key={ link }>
                <div
                  id={ link }
                  className={ `nav-div ${(activeIdMouseInter === link || activeIdClick === link) ? "nav-div-active" : ""}` }
                  onMouseEnter={ handleMouseEnter }
                  onMouseLeave={ handleMouseLeave }
                >
                  <Link
                    to="/"
                    onClick={ handleClick }
                  >{ link }
                  </Link>
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
