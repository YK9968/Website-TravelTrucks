import { configureStore } from "@reduxjs/toolkit";

import allTrucksReducer from "./trucks/slice";
import truckReducer from "./truck/slice";

export const store = configureStore({
  reducer: {
    allTrucks: allTrucksReducer,
    truck: truckReducer,
  },
});
