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
  },

  reducers: {
    getUser: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state, action) => {
      state.token = null;
      state.user = null;
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
      console.log(res.user);
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

      let response = await axios.post('https://dnd-api-server.herokuapp.com/v1/api/signup', { username, password });

      let res = response.data;
      dispatch(getUser(res))
    } catch (e) {
      console.log(e);
    }
  }
}

export default userSlice.reducer;