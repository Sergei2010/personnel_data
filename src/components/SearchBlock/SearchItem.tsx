import React, { ChangeEventHandler } from 'react';
import debounce from 'lodash.debounce';

import { useAppDispatch } from '../../hooks/redux';
import { setSearchValue } from '../../store/reducers/FilterSlice';
import search from '../../assets/search.svg';

const SearchItem = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<any>();

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 150),
    [],
  );

  const onChangeInput = (event: any) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className="search-content-left">
      <p>
        <img src={search} alt="Search" onClick={onClickClear} />
      </p>
      <input
        ref={inputRef}
        value={value}
        type="text"
        placeholder="Введите имя, тег, почту ..."
        onChange={onChangeInput}
      />
    </div>
  );
};

export default SearchItem;
