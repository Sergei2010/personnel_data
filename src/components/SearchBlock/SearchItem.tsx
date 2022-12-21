import React, { ReactEventHandler } from 'react';
import debounce from 'lodash.debounce';

import { useAppDispatch } from '../../hooks/redux';
import { setSearchValue } from '../../store/reducers/FilterSlice';
import search from '../../assets/search.svg';
import { IdentityFn } from '../../models/IdentityFn';

const SearchItem = ({ identity }: IdentityFn) => {
  const [isFocus, setFocus] = React.useState(false);
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<any>();

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current.focus();
  };

  // вернёт ф-ию 1раз без пересоздания
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 250),
    [],
  );

  const onChangeInput: ReactEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const { target } = event;
    if (target) {
      const value = (target as HTMLInputElement).value;
      setValue(value);
      updateSearchValue(value);
    }
  };

  const handlerFocus = () => {
    setFocus(!isFocus);
    identity(!isFocus);
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
        onFocus={handlerFocus}
        onBlur={handlerFocus}
      />
    </div>
  );
};

export default SearchItem;
