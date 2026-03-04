import { createSlice,type PayloadAction } from "@reduxjs/toolkit";

type ThemeMode = "light" | "dark";

const initialState: { mode: ThemeMode } = {
  mode: (localStorage.getItem("theme") as ThemeMode) || "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
