import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import loginReducer from "../redux/loginSlice";

// function exampleMiddleware(storeAPI) {
//   return function wrapDispatch(next) {
//     return function handleAction(action) {
//       console.log("exampleMiddleware", action);
//       return next(action);
//     };
//   };
// }
// const loggerMiddleware = (storeAPI) => (next) => (action) => {
//   console.log("loggerMiddleware", action);
//   let result = next(action);
//   return result;
// };

export default configureStore({
  reducer: {
    loginReducer,
  },
  // middleware: [exampleMiddleware, loggerMiddleware],
  devTools: process.env.NODE_ENV !== "production",
  // preloadedState : {},
  // enhancers: [reduxBatch]
});
