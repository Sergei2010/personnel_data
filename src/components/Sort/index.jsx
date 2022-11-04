import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/slices/modalSlice';
import { setSort } from '../../redux/slices/filterSlice';
import cancel from '../../assets/cancel.svg';
import { sortList } from '../../utils/variables';

const Sort = () => {
	const dispatch = useDispatch();
	const modal = useSelector(state => state.modal.modal);
	const sort = useSelector(state => state.filter.sort);

	function changeValue(event) {
		let n = event.target.name;
		let v = event.target.value;
		dispatch(setSort({ name: n, sortProperty: v }));
	}

	function handleClick(event) {
		let n = event.target.dataset.name;
		n === sortList[0].name
			?
			dispatch(setSort({ name: sortList[0].name, sortProperty: sortList[0].sortProperty }))
			:
			dispatch(setSort({ name: sortList[1].name, sortProperty: sortList[1].sortProperty }));
	}

	return (
		<fieldset>
			<legend>
				<p></p>
				<p>Сортировка</p>
				<p
					onClick={ () => dispatch(setModal(!modal)) }
				>
					<img
						src={ cancel }
						alt='Cancel Icon'
					/>
				</p>
			</legend>

			<ul role='none'>
				<li>
					<input
						type='radio'
						id='1'
						name={ sortList[0].name }
						value={ sortList[0].sortProperty }
						className='radio__input visuallyhidden'
						checked={ sort.name === sortList[0].name ? true : false }
						onChange={ changeValue }
					/>
					<span
						data-name={ sortList[0].name }
						className='radio__box'
						onClick={ handleClick }
					>
					</span>
					<label
						htmlFor='1'
					>
						{ sortList[0].name }
					</label>
				</li>
				<li>
					<input
						type='radio'
						id='2'
						name={ sortList[1].name }
						value={ sortList[1].sortProperty }
						className='radio__input visuallyhidden'
						checked={ sort.name === sortList[1].name ? true : false }
						onChange={ changeValue }
					/>
					<span
						data-name={ sortList[1].name }
						className='radio__box'
						onClick={ handleClick }
					>
					</span>
					<label
						htmlFor='2'
					>
						{ sortList[1].name }
					</label>
				</li>
			</ul>

		</fieldset>
	);
};

export default Sort;