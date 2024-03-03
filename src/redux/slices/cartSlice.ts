import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  value: number;
}

const initialState: CartState = {
  value: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state) => {
      state.value += 1;
    },
    remove: (state) => {
      state.value -= 1;
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
