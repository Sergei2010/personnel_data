import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPersonnels = createAsyncThunk(
	'personnels/getPersonnels',
	async function (d, { rejectWithValue }) {
		try {
			const response = await fetch(
				`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${d}`,
			);
			if (!response.ok) {
				throw new Error('Server Error!');
			}
			const { items } = await response.json();
			return items;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const initialState = {
	personnels: [],
	status: null,
	error: null,
};

export const personnelsSlice = createSlice({
	name: 'personnels',
	initialState,
	reducers: {
		setpersonnels(state, action) {
			state.personnels = action.payload;
		},
	},
	extraReducers: {
		[getPersonnels.pending]: (state) => {
			state.status = 'loading';
			state.error = null;
		},
		[getPersonnels.fulfilled]: (state, action) => {
			state.status = 'resolved';
			state.personnels = action.payload;
			state.error = null;
		},
		[getPersonnels.rejected]: (state, action) => {
			state.status = 'rejected';
			state.error = action.payload;
		},
	},
});

export const { setpersonnels } = personnelsSlice.actions;

export default personnelsSlice.reducer;