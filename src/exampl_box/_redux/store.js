import { configureStore } from '@reduxjs/toolkit';
import filter from '../../store/reducers/FilterSlice';
import personnels from './personnelsSlice';
import code from '../__redux/slices/codeSlice';
import modal from '../__redux/slices/modalSlice';

export const store = configureStore({
  reducer: {
    filter,
    personnels,
    code,
    modal,
  },
});

/* import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import filter from './slices/filterSlice';
import personnels from './slices/personnelsSlice';
import code from './slices/codeSlice';
import modal from './slices/modalSlice';

const rootReducer = combineReducers({
  filter,
  personnels,
  code,
  modal,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['personnels'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store); */