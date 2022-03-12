import axios from "axios";
import { compLoading } from "../redux/loginSlice";
// import store from "../redux/store";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // console.log("Requesst Intitated ", store);
    // Do something before request is sent
    // dispatch(compLoading);
    return config;
  },
  function (error) {
    // dispatch(compLoading);

    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // dispatch(compLoading);

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // dispatch(compLoading);

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default instance;
