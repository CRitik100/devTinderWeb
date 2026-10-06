import { createSlice } from "@reduxjs/toolkit";

const pendingConnectionSlice = createSlice({
  name: "pendingConnection",
  initialState: { data: null },
  reducers: {
    addPendingConnection: (state, action) => {
      state.data = action.payload;
    },
    removeUserFromPendingConnection: (state, action) => {
      state.data = state.data.filter((row) => row?._id !== action.payload);
    },
  },
});

export const { addPendingConnection, removeUserFromPendingConnection } = pendingConnectionSlice.actions;

export default pendingConnectionSlice.reducer;
