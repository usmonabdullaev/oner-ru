import { configureStore } from "@reduxjs/toolkit";

import headerReducer from "./slices/headerSlice.ts";
import navigationReducer from "./slices/navigationSlice.ts";
import cartReducer from "./slices/cartSlice.ts";
import dataReducer from "./slices/dataSlice.ts";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    navigation: navigationReducer,
    cart: cartReducer,
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
