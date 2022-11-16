import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { personnelsApi } from './API/personnelsApi';
import filter from '../store/reducers/FilterSlice';
import code from './slices/codeSlice';
import modal from './slices/modalSlice';

const rootReducer = combineReducers({
	[personnelsApi.reducerPath]: personnelsApi.reducer,
	filter,
	code,
	modal,
});

export const setupStore = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(personnelsApi.middleware)
});

// тип состояния
//export type RootState = ReturnType<typeof rootReducer>;
// тип Store
//export type AppStore = ReturnType<typeof setupStore>;
// тип Dispatch
//export type AppDispatch = AppStore[ 'dispatch' ]

