import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface NavigationState {
  value: number;
}

const initialState: NavigationState = {
  value: 0,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setItem } = navigationSlice.actions;

export default navigationSlice.reducer;
