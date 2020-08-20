import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const campaignSlice = createSlice({
  name: 'campaign',

  initialState: {
    campaignID: '',
    userID: '',
    title: '',
    setting: '',
    description: '',
    notes: [],
    characters: [],
    saving: false,
    allCampaigns: [],
    campaignPath: ''
  },
  
  reducers: {
    getCampaign: (state, action) => {
      state.campaignID = action.payload._id;
      state.user = action.payload.user
      state.title = action.payload.title;
      state.setting = action.payload.setting;
      state.description = action.payload.description;
      state.notes = action.payload.notes;
      state.characters = action.payload.characters;
    },
    setUsersCampaigns: (state, action) => {
      state.allCampaigns = action.payload;
    },

    disconnectFromCampaign: (state, action) => {
      state.campaignID = '';
    },

    toggleSaving: (state, action) => {
      state.saving = !state.saving;
    },

    setCampaignPath: (state, action) => {
      state.campaignPath = action.payload;
    }
  }
});

export const { getCampaign, disconnectFromCampaign, toggleSaving, setUsersCampaigns, setCampaignPath } = campaignSlice.actions;

export const getUserCampaigns = (payload) => {

  return async dispatch => {
    try {

      let response = await axios.get(`https://dnd-api-server.herokuapp.com/v1/api/${payload}/campaigns/`);
      let allCampaigns = response.data;

      dispatch(setUsersCampaigns(allCampaigns));

    } catch(e) {
      console.log(e);
    }
  }
}

export const findCampaign = (payload) => {
  return async dispatch => {
    try {
      // let response = await axios.get(`http://localhost:4000/v1/api/campaign/${payload.campaignID}`);
      let response = await axios.get(`https://dnd-api-server.herokuapp.com/v1/api/campaign/${payload.campaignID}`);

      let campaign = response.data;

      console.log('camp:', campaign);

      dispatch(getCampaign(campaign));
    } catch(e) {
      console.log(e);
    }
  }
}

export const createCampaign = (payload) => {
   return async dispatch => {
     try {
      console.log('campaign to create:',payload);
       let response = await axios.post('https://dnd-api-server.herokuapp.com/v1/api/campaign', payload);
      //  let response = await axios.post('http://localhost:4000/v1/api/campaign', payload);

       let campaign = response.data;

       dispatch(getCampaign(campaign));

     } catch(e) {
       console.log(e);
     }
   }
}

export const saveCampaign = (payload) => {
  const {campaignID, campaign} = payload;
  console.log('campaign:', campaign);
  return async dispatch => {
    try {
      dispatch(toggleSaving());
      console.log('saving...');
      let response = await axios.patch(`https://dnd-api-server.herokuapp.com/v1/api/campaign/${campaignID}`, campaign);
      console.log('save successful?', response.data);
      dispatch(toggleSaving());

    } catch(e) {
      console.log(e);
    }
  }
}

export default campaignSlice.reducer;
