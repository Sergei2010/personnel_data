import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	personnels: [],
};

export const personnelsSlice = createSlice({
	name: 'personnels',
	initialState,
	reducers: {
		setpersonnels(state, action) {
			state.personnels = action.payload;
		},
	},
});

export const { setpersonnels } = personnelsSlice.actions;

export default personnelsSlice.reducer;