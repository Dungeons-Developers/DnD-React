import { createSlice } from '@reduxjs/toolkit';
import { encode } from 'js-base64';
import Cookies from 'js-cookie';

import server from '../../api/server';

const encodeBase64 = ({ username, password }) => {
  const encoded = encode(`${username}:${password}`);
  return encoded;
};

const userSlice = createSlice({
  name: 'user',

  initialState: {
    token: Cookies.getJSON().token || null,
    username: Cookies.getJSON().username || null,
    userId: Cookies.getJSON().userId || null,
  },

  reducers: {
    getUser: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.user.username;
      state.userId = action.payload.user._id;
    },
    logout: (state, action) => {
      state.token = action.payload;
      state.username = action.payload;
      state.userId = action.payload;
      Cookies.remove('token', { expires: 1, sameSite: 'none', secure: true });
      Cookies.remove('username', {
        expires: 1,
        sameSite: 'none',
        secure: true,
      });
      Cookies.remove('userId', { expires: 1, sameSite: 'none', secure: true });
    },
  },
});

export const { getUser, logout } = userSlice.actions;

export const login = (payload) => {
  const encoding = encodeBase64(payload);
  return async (dispatch) => {
    try {
      let response = await server.get('/login', {
        headers: {
          Authorization: `Basic ${encoding}`,
        },
      });

      let res = response.data;
      Cookies.set('token', res.token, {
        expires: 1,
        sameSite: 'none',
        secure: true,
      });
      Cookies.set('username', res.user.username, {
        expires: 1,
        sameSite: 'none',
        secure: true,
      });
      Cookies.set('userId', res.user._id, {
        expires: 1,
        sameSite: 'none',
        secure: true,
      });
      dispatch(getUser(res));
    } catch (e) {
      console.log(e);
    }
  };
};

export const create = (payload) => {
  const { username, password } = payload;

  return async (dispatch) => {
    try {
      // let response = await axios.post('http://localhost:4000/v1/api/signup', { username, password });
      let response = await server.post('/user', { username, password });

      let res = response.data;
      Cookies.set('token', res.token, {
        expires: 1,
        sameSite: 'none',
        secure: true,
      });
      Cookies.set('username', res.user.username, {
        expires: 1,
        sameSite: 'none',
        secure: true,
      });
      Cookies.set('userId', res.user._id, {
        expires: 1,
        sameSite: 'none',
        secure: true,
      });
      dispatch(getUser(res));
    } catch (e) {
      console.log(e);
    }
  };
};

export default userSlice.reducer;
