import { loginSlice } from "./loginSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
//Action

export const loginSuccess = createAsyncThunk(
  "loginReducer/loginSuccess",
  async () => {
    // const response = await client.get('/fakeApi/users')
    return { name: "Siyram" };
  }
);
// export const { loginSuccess } = loginSlice.actions;
