import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/slices/auth/auth.slice";
import themeReducer from "@/store/slices/theme/theme.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
