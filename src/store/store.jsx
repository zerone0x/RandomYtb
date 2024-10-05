import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "../features/channel/channelSlice";

export const store = configureStore({
  reducer: {
    channel: channelReducer,
  },
});
