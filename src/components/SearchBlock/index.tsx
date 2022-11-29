import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { setModal } from '../../exampl_box/__redux/slices/modalSlice';
import listIcon from '../../assets/list-ui-alt.svg';
import SearchItem from './SearchItem';

const SearchBlock = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modalReducer.modal);

  return (
    <div className="search">
      <SearchItem />
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
