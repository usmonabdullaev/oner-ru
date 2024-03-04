import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterState {
  value: string;
}

const initialState: FilterState = {
  value: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
