import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import feedReducer from "../slices/feedSlice";
import connectionReducer from "../slices/connection";
import pendingConnectionReducer from "../slices/pendingConnection";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connection: connectionReducer,
    pendingConnection: pendingConnectionReducer,
  },
});

export default appStore;
