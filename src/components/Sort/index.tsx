import React from 'react';

//import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setModal } from '../../store/reducers/ModalSlice';
import { setSort } from '../../store/reducers/FilterSlice';
import cancel from '../../assets/cancel.svg';
import { sortList } from '../../utils/variables_functions';

const Sort = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modalReducer.modal);
  const sort = useAppSelector((state) => state.filterReducer.sort);

  function changeValue(event: { target: { name: any; value: any } }) {
    let n = event.target.name;
    let v = event.target.value;
    dispatch(setSort({ name: n, sortProperty: v }));
  }

  function handleClick(event: React.MouseEvent) {
    const target = event.target as HTMLSpanElement;
    if (target) {
      let n = target.dataset.name;
      n === sortList[0].name
        ? dispatch(setSort({ name: sortList[0].name, sortProperty: sortList[0].sortProperty }))
        : dispatch(setSort({ name: sortList[1].name, sortProperty: sortList[1].sortProperty }));
    }
  }

  return (
    <fieldset>
      <legend>
        <p></p>
        <p>Сортировка</p>
        <p onClick={() => dispatch(setModal(!modal))}>
          <img src={cancel} alt="Cancel Icon" />
        </p>
      </legend>

      <ul role="none">
        <li>
          <input
            type="radio"
            id="1"
            name={sortList[0].name}
            value={sortList[0].sortProperty}
            className="radio__input visuallyhidden"
            checked={sort.name === sortList[0].name ? true : false}
            onChange={changeValue}
          />
          <span data-name={sortList[0].name} className="radio__box" onClick={handleClick}></span>
          <label htmlFor="1">{sortList[0].name}</label>
        </li>
        <li>
          <input
            type="radio"
            id="2"
            name={sortList[1].name}
            value={sortList[1].sortProperty}
            className="radio__input visuallyhidden"
            checked={sort.name === sortList[1].name ? true : false}
            onChange={changeValue}
          />
          <span data-name={sortList[1].name} className="radio__box" onClick={handleClick}></span>
          <label htmlFor="2">{sortList[1].name}</label>
        </li>
      </ul>
    </fieldset>
  );
};

export default Sort;
