//Action

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";

export const loginAction = createAsyncThunk("app/login", async (payload) => {
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
});
