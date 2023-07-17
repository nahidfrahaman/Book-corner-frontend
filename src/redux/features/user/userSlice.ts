/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  email: string | null;
}

const initialState: IUser = {
  email: null,
};

export const userSlice = createSlice({
  name: "isUserExist",
  initialState,
  reducers: {
    isUserExist: (state, action) => {
      state.email = action.payload!;
    },
  },
});

export const { isUserExist } = userSlice.actions;

export default userSlice.reducer;
