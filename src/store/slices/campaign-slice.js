import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const campaignSlice = createSlice({
  initialState: {
    campaignID: '',
    userID: '',
    title: '',
    setting: '',
    description: '',
    notes: [],
    characters: [],
  },
  
  reducers: {
    createCampaign: (state, action) => {},
    getCampaign: (state, action) => {
      state.campaignID = action.payload._id;
      // state.userID = action.payload. however we refer to the foreign key?
      state.title = action.payload.title;
      state.setting = action.payload.setting;
      state.description = action.payload.description;
      state.notes = action.payload.notes;
      state.characters = action.payload.characters;
    }
  }
});

export const { createCampaign, getCampaign } = campaignSlice.actions;

export const findCampaign = (payload) => {
  return async dispatch => {
    try {
      let response = await axios.get(`https://dnd-api-server.herokuapp.com/v1/api/campaigns/${payload.campaignID}`);

      let campaign = response.data;

      dispatch(getCampaign(campaign));
    } catch(e) {
      console.log(e);
    }
  }
}

export default campaignSlice.reducer;
