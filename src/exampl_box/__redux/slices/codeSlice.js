import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	code: undefined,
};

export const codeSlice = createSlice({
	name: 'code',
	initialState,
	reducers: {
		setcode(state, action) {
			state.code = action.payload;
		},
	},
});

export const { setcode } = codeSlice.actions;

export default codeSlice.reducer;