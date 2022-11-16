import React from 'react';

const SearchItem = () => {
  const inputRef = React.useRef<any>();
  const InputComponent = React.forwardRef<HTMLInputElement>((props, ref) => {
    return <input ref={ref} type="text" placeholder="Введите имя, тег, почту ..." />;
  });

  return <InputComponent ref={inputRef} />;
};

export default SearchItem;
