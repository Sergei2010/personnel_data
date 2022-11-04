import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/slices/modalSlice';

const Modal = ({ children }) => {
	const dispatch = useDispatch();
	const modal = useSelector(state => state.modal.modal);
	return (
		<div
			className={ modal ? "modal active" : "modal" }
			onClick={ (e) => {
				e.preventDefault();
				dispatch(setModal(!modal));
			} }
		>
			<div
				className={ modal ? "modal__content active" : "modal__content" }
				onClick={ (e) => {
					e.stopPropagation();
				} }>
				{ children }
			</div>
		</div>
	);
};

export default Modal;