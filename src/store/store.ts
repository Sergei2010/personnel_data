import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { personnelsAPI } from "../services/PersonnelsService";

import { postAPI } from "../services/PostService";
import userReducer from './reducers/UserSlice';
import filterReducer from './reducers/FilterSlice';
import modalReducer from './reducers/ModalSlice';

const rootReducer = combineReducers( {
	userReducer,
	filterReducer,
	modalReducer,
	[ postAPI.reducerPath ]: postAPI.reducer,
	[ personnelsAPI.reducerPath ]: personnelsAPI.reducer

} );

export const setupStore = () => {
	return configureStore( {
		reducer: rootReducer,
		middleware: ( getDefaultMiddleware ) =>
			getDefaultMiddleware().concat( postAPI.middleware )
	} );
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore[ 'dispatch' ];