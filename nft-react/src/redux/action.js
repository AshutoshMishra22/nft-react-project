import { loginSlice } from "./loginSlice";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";
//Action

// export const loginActionConst = createAction("app/login");

export const loginAction = createAsyncThunk(
  "app/login",
  async (payload, thunkAPI) => {
    return await axios({
      method: "post",
      url: "auth/login",
      data: payload,
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }
);
// export const { loginSuccess } = loginSlice.actions;
