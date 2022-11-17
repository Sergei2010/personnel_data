import { createSlice } from '@reduxjs/toolkit';
import { sortList } from '../../utils/variables_functions';
import { ISort } from '../../models/ISort';

interface SearchState {
	department: string;
	search: string | '';
	sort: ISort;
}

const initialState: SearchState = {
	department: 'all',
	search: '',
	sort: {
		name: sortList[ 0 ].name,
		sortProperty: sortList[ 0 ].sortProperty,
	},
};

export const filterSlice = createSlice( {
	name: 'filters',
	initialState,
	reducers: {
		setdepartment ( state, action ) {
			state.department = action.payload;
		},
		setSearch ( state, action ) {
			state.search = action.payload;
		},
		setSort ( state, action ) {
			state.sort = action.payload;
		},
		setFilters ( state, action ) {
			state.search = action.payload.searchValue;
			state.department = action.payload.department;
			state.sort = action.payload.sort;
		}
	},
} );

export const { setdepartment, setSearch, setSort, setFilters } = filterSlice.actions;

export default filterSlice.reducer;