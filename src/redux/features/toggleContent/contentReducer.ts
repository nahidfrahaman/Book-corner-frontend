/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

interface IContent {
  contentVisible: boolean;
}

const initialState: IContent = {
  contentVisible: false,
};

export const contentSlice = createSlice({
  name: "contentVisible",
  initialState,
  reducers: {
    isContentVisible: (state) => {
      state.contentVisible = !state.contentVisible;
    },
  },
});

export const { isContentVisible } = contentSlice.actions;

export default contentSlice.reducer;
