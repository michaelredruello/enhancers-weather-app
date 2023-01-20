import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "./Reducers";

export const WeatherStore = configureStore({
  reducer: {
    WeatherReducer,
  },
});
