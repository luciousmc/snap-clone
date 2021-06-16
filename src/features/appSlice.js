import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    selectedImage: null,
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null
    },
    selectImage: (state, action) => {
      state.selectedImage = action.payload
    },
    resetImage: (state) => {
      state.selectedImage = null
    }
  }
})

export const { login, logout, selectImage, resetImage } = appSlice.actions;


// Selectors
export const selectUser = state => state.app.user;
export const selectSelectedImage = (state) => state.app.selectedImage;


export default appSlice.reducer;