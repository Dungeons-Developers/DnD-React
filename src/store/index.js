import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// import slices here

import users from './slices/user-slice';
import campaign from './slices/campaign-slice';
import characters from './slices/character-slice';


let reducers = combineReducers( { users, campaign, characters } );

let store = configureStore( { reducer: reducers } );

export default store;

