import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  Keyboard: {
    visible: false,
    keyboardHeight: 0,
  },
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setKey: (state, action) => {
      state.Keyboard = action.payload;
    },
  },
});

export const {setKey} = navSlice.actions;
export const selectKeyboard = (state: any) => state.nav.Keyboard;
export default navSlice.reducer;
