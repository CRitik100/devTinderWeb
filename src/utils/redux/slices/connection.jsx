import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: { data: null },
  reducers: {
    updateConection: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateConection } = connectionSlice.actions;
export default connectionSlice.reducer;
