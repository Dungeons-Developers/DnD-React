import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
  name: 'user',

  initialState: {
    userID: '',
    userName: '',
  },

  reducers: {
    getUser: (state, action) => {
      state.userID = action.payload._id;
      state.username = action.payload.username
    }
  }
});

export const {getUser} = userSlice.actions;

export const login = (payload) => {

  console.log('payload:', payload);

  const {username, password} = payload;

  return async dispatch => {
    try {

      let response = await axios.post('https://cf-dnd-character-creator.herokuapp.com/v1/api/user', {username, password});

      let user = response.data;

      console.log('user:', user);
      dispatch(getUser(user))
    } catch(e) {
      console.log(e);
    }
  }
}

export default userSlice.reducer;