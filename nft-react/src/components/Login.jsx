import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

import { errorColorCls, warningColorCls } from "../utils/constants";
import loginSelector from "../redux/selector";
import { loginAction } from "./../redux/action";

const Input = ({
  placeholder,
  type,
  name,
  value,
  classProps,
  handleChange,
}) => (
  <input
    placeholder={placeholder}
    type={type}
    name={name}
    value={value}
    onChange={(e) => handleChange(e, name)}
    step='0.0001'
    className={`my-2 w-full rounded-sm p-2 outline-none bg-transparent border-[#3d4f7c] text-white text-sm${
      type === "number" ? "appearance-none" : ""
    } ${classProps}`}
  />
);

const Login = ({ setToggle }) => {
  const [state, setState] = useState({
    email: "",
    securityKey: "",
    message: "",
  });
  const { email, securityKey, message } = state;
  const dispatch = useDispatch();
  const { userDetails = {} } = useSelector(loginSelector);

  useEffect(() => {
    if (userDetails.success) {
      setToggle();
    } else {
      updateState("message", userDetails.message || "");
    }
  }, [JSON.stringify(userDetails)]);
  function handleChange(e, name) {
    message && updateState("message", "");
    updateState(name, e.target.value);
  }
  function updateState(fk, fval) {
    setState((prevState) => {
      return {
        ...prevState,
        [fk]: fval,
      };
    });
  }
  function handleLogin() {
    let errorMsg = "";
    if (!email || !securityKey) {
      errorMsg = "Please Complete login form.";
    } else {
      dispatch(
        loginAction({
          email,
          password: securityKey,
        })
      );
    }
    errorMsg && updateState("message", errorMsg);
  }
  return (
    <div className='fixed blue-glassmorphism z-20 w-[100%] h-[100%] bottom-0'>
      <div className='text-white animate-scale-up-center grid place-items-center relative h-[80%] w-[100%]'>
        <div className='p-5 flex flex-col justify-evenly items-center gradient-bg-login rounded-lg'>
          <div className='text-xl w-full mx-6 my-2 text-white cursor-pointer'>
            <AiOutlineClose onClick={setToggle} />
          </div>
          <div className='w-full mt-5 mx-8px'>
            <Input
              placeholder='Email'
              name='email'
              type='text'
              value={email}
              handleChange={handleChange}
            />
            <Input
              placeholder='Security key'
              name='securityKey'
              type='password'
              value={securityKey}
              handleChange={handleChange}
            />
          </div>
          <p
            className={`h-5 ${
              email && securityKey ? errorColorCls : warningColorCls
            }`}
          >
            {message}
          </p>
          <button
            type='button'
            onClick={() => handleLogin()}
            className={`text-white w-full my-8 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer ${
              true ? "animate-bg-pan-right" : ""
            }`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
