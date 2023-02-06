import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

import { UserType } from "../../types";

interface IUser {
  user: UserType | null;
  isLoggedIn: boolean;
}

const coreUrl = import.meta.env.VITE_CORE_URL as string;
const cookies = new Cookies();
const initialState: IUser = {
  user: null,
  isLoggedIn: false,
};


const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("zapi-user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("zapi-user");
    },
  },
  extraReducers: (builder) => {},
});

export const { login, logout } = user.actions;
export default user.reducer;
