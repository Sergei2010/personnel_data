import React from 'react';
import debounce from 'lodash.debounce';
import searchIcon from '../../assets/Vector.svg';
import listIcon from '../../assets/list-ui-alt.svg';

const SearchBlock = () => {
	const inputRef = React.useRef();
	const onClickClear = () => {
		inputRef.current.focus();
	};
	const testDebounce = React.useCallback(
		debounce(() => {
			console.log('Hello');
		}, 1000),
		[]
	);
	return (
		<div className="search">
			<div className="search-content-left">
				<p>
					<img src={ searchIcon } alt="Search" />
				</p>
				<input
					type="text"
					ref={ inputRef } placeholder="Введите имя, тег, почту ..." />
			</div>
			<div className="search-content-right">
				<img
					onClick={ onClickClear }
					src={ listIcon }
					alt="ListIcon"
				/>
			</div>
		</div>
	);
};

export default SearchBlock;