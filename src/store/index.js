import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// import slices here

import users from './slices/user-slice';
import campaign from './slices/campaign-slice';

let reducers = combineReducers( { users, campaign } );

let store = configureStore( { reducer: reducers } );

export default store;

