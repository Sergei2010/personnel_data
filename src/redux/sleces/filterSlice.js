import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	department: 'all',
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setDepartment(state, action) {
			//console.log(action);
			state.department = action.payload;
		}
	},
});

export const { setDepartment } = filterSlice.actions;

export default filterSlice.reducer;