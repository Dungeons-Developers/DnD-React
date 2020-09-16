import { createSlice } from '@reduxjs/toolkit';

import server from '../../api/server';

const characterSlice = createSlice({
  name: 'character',

  initialState: {
    disabled_scores: [],
    score_options: [],
    allCharacters: [],
  },

  reducers: {
    insertScore(state, action) {
      state.score_options = [...state.score_options, action.payload];
    },
    removeScore(state, action) {
      state.score_options.splice(action.payload, 1);
    },
    disableScore(state, action) {
      state.disabled_scores = [
        ...state.disabled_scores,
        parseInt(action.payload),
      ];
    },
    setAllCharacters: (state, action) => {
      state.allCharacters = action.payload;
    },
    addChar: (state, action) => {
      state.allCharacters.push(action.payload);
      state.disabled_scores = [];
      state.score_options = [];
    },
    updateChar: (state, action) => {
      let array = state.allCharacters.map((char) => {
        if (action.payload._id === char._id) {
          return action.payload;
        }
        return char;
      });
      state.allCharacters = array;
    },
    filterChar: (state, action) => {
      let array = state.allCharacters.filter((char) => {
        return char._id !== action.payload;
      });
      state.allCharacters = array;
    },
  },
});

export const {
  setAllCharacters,
  addChar,
  updateChar,
  insertScore,
  disableScore,
  removeScore,
  filterChar,
} = characterSlice.actions;

// Create
export const createCharacter = (payload) => {
  return async (dispatch) => {
    try {
      let response = await server.post('/character', payload);

      let res = response.data;
      console.log(res);
      dispatch(addChar(res));
    } catch (e) {
      console.log(e);
    }
  };
};

// Read
export const getCharacters = (payload) => {
  return async (dispatch) => {
    let response = await server.get(`/${payload}/characters`);
    let characters = response.data;
    dispatch(setAllCharacters(characters));
  };
};

// Update
export const updateCharacter = (payload) => {
  return async (dispatch) => {
    try {
      await server.patch(`/character/${payload._id}`, payload);
      // let response = await axios.patch(`https://dnd-api-server.herokuapp.com/v1/api/character/${payload._id}`, payload);

      // let res = response.data;
      dispatch(updateChar(payload));
    } catch (e) {
      console.log(e);
    }
  };
};

// Delete
export const deleteCharacter = (payload) => {
  return async (dispatch) => {
    try {
      let response = await server.delete(`/character/${payload._id}`, payload);

      let res = response.data;
      dispatch(filterChar(res));
    } catch (e) {
      console.log(e);
    }
  };
};

export default characterSlice.reducer;
