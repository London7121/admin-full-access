import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  username: string;
  roles: string[];
  permissions: string[];
  avatar: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user")!)
    : null,
  token: sessionStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;

      sessionStorage.setItem("user", JSON.stringify(action.payload.user));
      sessionStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;

      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
