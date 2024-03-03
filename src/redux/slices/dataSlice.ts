import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type DataState = {
  value: {
    id: number;
    image: string;
    name: string;
    text: string;
    artikul: number;
    price: number;
    voltage: number;
    capacity: number;
    conclusions: string;
    terminals: string;
  }[];
};

const initialState: DataState = {
  value: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
