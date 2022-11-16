import { createSlice } from '@reduxjs/toolkit';

//import { IModal } from '../../models/IModal';

interface ModalState {
	modal: boolean;
}

const initialState: ModalState = {
	modal: false,
};

export const modalSlice = createSlice( {
	name: 'modal',
	initialState,
	reducers: {
		setModal ( state, action ) {
			state.modal = action.payload;
		},
	},
} );

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;