import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

import { characterAdd } from './user-slice';

const characterSlice = createSlice({
  name: 'character',

  initialState: {
    score_options: [],
    allCharacters: []
  },

  reducers: {
    insertScore(state, action) {
      state.score_options = [...state.score_options, action.payload]
    },
    setAllCharacters: (state, action) => {
      state.allCharacters = action.payload;
    },
    addChar: (state, action) => {
      state.allCharacters.push(action.payload)
    },
    updateChar: (state, action) => {
      state.allCharacters = state.allCharacters.map((char) => {
        if (action.payload._id === char._id) char = action.payload;
        return char;
      })
    }
  }
});


export const { setAllCharacters, addChar, updateChar, insertScore } = characterSlice.actions;

export const getCharacters = payload => {
  return async dispatch => {
    let response = await axios.get(`https://dnd-api-server.herokuapp.com/v1/api/${payload}/characters`);
    let characters = response.data;
    dispatch(setAllCharacters(characters));
  }
}


export const createCharacter = payload => {
  payload.ability_scores = { str: '5' };
  return async dispatch => {
    try {
      let response = await axios.post('https://dnd-api-server.herokuapp.com/v1/api/character', payload);

      let res = response.data;
      console.log(res)
      dispatch(addChar(res))
    } catch (e) {
      console.log(e);
    }
  }
}

export const updateCharacter = payload => {
  return async dispatch => {
    try {
      let response = await axios.patch(`https://dnd-api-server.herokuapp.com/v1/api/character/${payload._id}`, payload);

      let res = response.data;
      dispatch(updateChar(res))
    } catch (e) {
      console.log(e);
    }
  }
}

export const deleteCharacter = payload => {
  console.log(payload);

  return async dispatch => {
    try {
      let response = await axios.delete(`https://dnd-api-server.herokuapp.com/v1/api/character/${payload._id}`, payload);

      let res = response.data;
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
}

export default characterSlice.reducer;
