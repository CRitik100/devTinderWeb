import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.data = action.payload;
    },
    removeUser: (state) => {
      state.data = null;
    },
    updateUserPhoto: (state, action) => {
      state.data.photo = action.payload;
    },
  },
});

export const { addUser, removeUser, updateUserPhoto } = userSlice.actions;
export default userSlice.reducer;
