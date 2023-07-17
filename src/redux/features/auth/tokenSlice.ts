/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

interface IToken {
  token: string | null;
}

const initialState: IToken = {
  token: null,
};

export const tokenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addtoken: (state, actions) => {
      state.token = actions.payload;
    },
  },
});

export const { addtoken } = tokenSlice.actions;

export default tokenSlice.reducer;
