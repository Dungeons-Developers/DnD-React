import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const characterSlice = createSlice({
  name: 'character',

  initialState: {
    name: '',
    class: '',
    race: '',
    ability_scores: null,
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
  }
});

export const { create } = characterSlice.actions;

export const createCharacter = payload => {
  console.log(payload)

  // Format Payload

  return async dispatch => {
    try {
      let response = await axios.post('https://dnd-api-server.herokuapp.com/v1/api/character', payload);

      let res = response.data;
      console.log(res);
      dispatch(create(res))
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
      let response = await axios.patch(`https://dnd-api-server.herokuapp.com/v1/api/character/${payload.id}`, payload);

      let res = response.data;
      console.log(res);
      dispatch(create(res))
    } catch (e) {
      console.log(e);
    }
  }
}

export default characterSlice.reducer;
