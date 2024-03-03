import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface HeaderState {
  value: boolean;
}

const initialState: HeaderState = {
  value: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setState } = headerSlice.actions;

export default headerSlice.reducer;
