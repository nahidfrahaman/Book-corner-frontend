import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";

import contentReducer from "./features/toggleContent/contentReducer";

export const store = configureStore({
  reducer: {
    contentVisible: contentReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
