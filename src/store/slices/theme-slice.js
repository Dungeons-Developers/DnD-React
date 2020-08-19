import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',

  initialState: {
    theme: 'dark',
  },

  reducers: {
    toggleTheme: (state, action) => {
      console.log(state.theme);
      switch(state.theme) {
        case 'dark':
          state.theme = 'light';
          break;
        case 'light':
          state.theme = 'dark';
          break;
       default:
         break; 
      }
    }
  }
});

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;