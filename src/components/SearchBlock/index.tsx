import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { setModal } from '../../exampl_box/__redux/slices/modalSlice';
import listIcon from '../../assets/list-ui-alt.svg';
import SearchItem from './SearchItem';
//import { IdentityFn } from '../../models/IdentityFn';

const SearchBlock = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modalReducer.modal);
  const [isActive, setActive] = React.useState(false);

  /* const identity: IdentityFn = function (value) {
    setActive(value);
    return value;
  }; */

  function identity<T extends React.SetStateAction<boolean>>(value: T): void {
    setActive(value);
  }

  return (
    <div className={isActive ? 'search search-active' : 'search search-not-active'}>
      <SearchItem identity={identity} />
      <div className="search-content-right">
        <img
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            dispatch(setModal(!modal));
          }}
          src={listIcon}
          alt="ListIcon"
        />
      </div>
    </div>
  );
};

export default SearchBlock;
