import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    data: null,
  },
  reducers: {
    addFeed: (state, action) => {
      state.data = action.payload;
    },
    removeFeed: (state) => {
      state.data.shift();
    },
  },
});

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
