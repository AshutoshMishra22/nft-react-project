import { createSlice, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { loginAction } from "./action";
const initialState = {
  isLoading: false,
  userDetails: { name: "", status: "" },
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

// const loginReducer = createReducer(initialState, (builder) => {
//   builder.addCase(loginAction.fulfilled, (state, action) => {
//     state.isLoading = true;
//     state.userDetails = action.payload;
//   });
// });
export const loginSlice = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    compLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginAction.pending, (state) => {
      state.userDetails = initialState.userDetails;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.userDetails = action.payload;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.userDetails = action.payload;
    });
  },
});

export const { compLoading } = loginSlice.actions;
export default loginSlice.reducer;
