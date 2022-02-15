import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginSuccess } from "./action";
const initialState = {
  userDetails: { name: "Ram", status: "idle" },
};
const loginProcessing = {
  // loginSuccess: (state, { type, payload }) => {
  //   state.userDetails = { ...state.userDetails, ...payload };
  // },
  loginSuccess: createAsyncThunk(
    "loginReducer/loginSuccess",
    async (payload) => {
      console.log("payload ", payload);
      return payload;
    }
  ),
};

export const loginSlice = createSlice({
  name: "loginReducer",
  initialState,
  reducers: loginProcessing,
  extraReducers(builder) {
    builder.addCase(loginSuccess.pending, (state, action) => {
      state.userDetails.status = "loading";
      state.userDetails.extra = builder;
    });
  },
});

export default loginSlice.reducer;
