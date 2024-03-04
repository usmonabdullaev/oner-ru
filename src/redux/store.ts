import { configureStore } from "@reduxjs/toolkit";

import headerReducer from "./slices/headerSlice.ts";
import navigationReducer from "./slices/navigationSlice.ts";
import cartReducer from "./slices/cartSlice.ts";
import dataReducer from "./slices/dataSlice.ts";
import filterReducer from "./slices/filterSlice.ts";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    navigation: navigationReducer,
    cart: cartReducer,
    data: dataReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
