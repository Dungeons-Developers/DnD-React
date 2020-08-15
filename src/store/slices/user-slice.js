import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { encode } from 'js-base64';

const encodeBase64 = ({ username, password }) => {
  const encoded = encode(`${username}:${password}`);
  return encoded;
};

const userSlice = createSlice({
  name: 'user',

  initialState: {
    token: null,
    user: null,
    characters: [],
    campaigns: []
  },

  reducers: {
    getUser: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.characters = action.payload.user.characters;
      state.campaigns = action.payload.user.campaigns;
    },
    logout: (state, action) => {
      state.token = null;
      state.user = null;
      state.characters = null;
      state.campaigns = null;
    }
  }
});

export const { getUser, logout } = userSlice.actions;

export const login = (payload) => {

  const encoding = encodeBase64(payload)
  return async dispatch => {
    try {
      let response = await axios.post(
        'https://dnd-api-server.herokuapp.com/v1/api/user',
        {},
        {
          headers: {
            'Authorization': `Basic ${encoding}`,
          },
        }
      );

      let res = response.data;
      dispatch(getUser(res))
    } catch (e) {
      console.log(e);
    }
  }
}

export const create = (payload) => {
  const { username, password } = payload;

  return async dispatch => {
    try {

      // let response = await axios.post('http://localhost:4000/v1/api/signup', { username, password });
      let response = await axios.post('https://dnd-api-server.herokuapp.com/v1/api/signup', { username, password });

      let res = response.data;
      dispatch(getUser(res))
    } catch (e) {
      console.log(e);
    }
  }
}

export default userSlice.reducer;