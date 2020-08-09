import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// import slices here

import users from './slices/user-slice';

let reducers = combineReducers( { users } );

let store = configureStore( { reducer: reducers } );

export default store;

