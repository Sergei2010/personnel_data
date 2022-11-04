import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/slices/modalSlice';
import debounce from 'lodash.debounce';
import search from '../../assets/search.svg';
import listIcon from '../../assets/list-ui-alt.svg';

const SearchBlock = () => {
	const dispatch = useDispatch();
	const modal = useSelector(state => state.modal.modal);
	//console.log('modal:', modal);
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
					<img
						src={ search }
						alt="Search"
						onClick={ onClickClear }
					/>
				</p>
				<input
					type="text"
					ref={ inputRef } placeholder="Введите имя, тег, почту ..." />
			</div>
			<div className="search-content-right">
				<img
					onClick={ (e) => {
						e.preventDefault();
						//e.stopPropagation();
						dispatch(setModal(!modal));
					} }
					src={ listIcon }
					alt="ListIcon"
				/>
			</div>
		</div>
	);
};

export default SearchBlock;