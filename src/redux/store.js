import { configureStore } from "@reduxjs/toolkit";
import allTrucksReducer from "./trucks/slice";
import truckReducer from "./truck/slice";
import favoriteReducer from "./favorites/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const favoritePersistConfig = {
  key: "favoriteTrucks",
  storage,
  whitelist: ["items"],
};

const persistFavoriteReducer = persistReducer(
  favoritePersistConfig,
  favoriteReducer
);

export const store = configureStore({
  reducer: {
    allTrucks: allTrucksReducer,
    truck: truckReducer,
    favorite: persistFavoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
