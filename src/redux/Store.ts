import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";

import tokenReducer from "./features/auth/tokenSlice";
import contentReducer from "./features/toggleContent/contentReducer";
import userReduer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    contentVisible: contentReducer,
    isUserExist: userReduer,
    token: tokenReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
