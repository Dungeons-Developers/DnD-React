import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

import { characterAdd } from './user-slice';

const characterSlice = createSlice({
  name: 'character',

  initialState: {
    name: '',
    class: '',
    race: '',
    ability_scores: null,
    score_options: [],
    alignment: '',
    deity: '',
    proficient_skills: null,
    equipment: null,
    level: '1',
    isInCampaign: false,
    character_id: null,
  },

  reducers: {
    create: (state, action) => {
      state.name = action.payload.name;
      state.class = action.payload.class;
      state.race = action.payload.race;
      state.ability_scores = action.payload.ability_scores;
      state.alignment = action.payload.alignment;
      state.deity = action.payload.deity;
      state.proficient_skills = action.payload.proficient_skills;
      state.equipment = action.payload.equipment;
      state.level = action.payload.level;
      state.character_id = action.payload.character_id; 
    },
    insertScore(state, action) {
      console.log('REDUCER PAYLOAD', action.payload);
      // console.log('HELLOOOO')
      console.log('SCORE OPTIONS', state.score_options);
      state.score_options = [...state.score_options, action.payload]
      console.log('SCORE OPTIONS', state.score_options);
    },
    remove: (state, action) => {
      state.name = null;
      state.class = null;
      state.race = null;
      state.ability_scores = null;
      state.alignment = null;
      state.deity = null;
      state.proficient_skills = null;
      state.equipment = null;
      state.level = null;
    }
  }
});

export const { create, remove, insertScore } = characterSlice.actions;

export const createCharacter = payload => {
  console.log('CharacterSlice payload:', payload)
  // Format Payload

  return async dispatch => {
    try {
      let response = await axios.post('https://dnd-api-server.herokuapp.com/v1/api/character', payload);

      let res = response.data;
      console.log('res', res);

      dispatch(create(res))
      characterAdd(res);
    } catch (e) {
      console.log(e);
    }
  }
}

export const updateCharacter = payload => {
  console.log(payload)

  // Format Payload

  return async dispatch => {
    try {
      let response = await axios.patch(`https://dnd-api-server.herokuapp.com/v1/api/character/${payload._id}`, payload);

      let res = response.data;
      console.log(res);
      dispatch(create(res))
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
      dispatch(remove(res))
    } catch (e) {
      console.log(e);
    }
  }
}

export default characterSlice.reducer;
