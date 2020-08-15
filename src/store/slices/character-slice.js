import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

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
    isInCampaign: false
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
    },
    insertScore: (state, action) => {
      state.score_options.push(action.payload.score);
      console.log(state.score_options);
    }
  }
});

export const { create, insertScore } = characterSlice.actions;

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

export default characterSlice.reducer;
