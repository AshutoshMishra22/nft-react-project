import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../redux/action";
import loginSelector from "../redux/selector";
import logo from "../icons/logo.png";
import {
  detectMotion,
  getContacts,
  getGeoLocation,
  shareApp,
} from "./../features";

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

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};
const Navbar = () => {
  const count = useSelector(loginSelector);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    toggleMenu: false,
    toggleLogin: false,
    loginTry: false,
  });
  const { toggleMenu, toggleLogin, loginTry } = state;

  function updateState(stateKey, stateValue) {
    setState((prevState) => {
      return { ...prevState, [stateKey]: stateValue };
    });
  }

  function handleChange(e, name) {
    updateState(name, e.target.value);
  }

  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center item-center'>
        <img src={logo} alt='logo' />
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-intial'>
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <li
          className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'
          onClick={() => updateState("toggleLogin", true)}
        >
          Login
        </li>
      </ul>
      <div className='flex relative'>
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className='text-white md:hidden cursor-pointer'
            onClick={() => updateState("toggleMenu", false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className='text-white md:hidden cursor-pointer'
            onClick={() => updateState("toggleMenu", true)}
          />
        )}
        {toggleMenu && (
          <ul className='z-10 fixed right-2 top-0 right-2 p-3  w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
            <li className='text-xl w-full my-2'>
              <AiOutlineClose
                onClick={() => updateState("toggleMenu", false)}
              />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => (
                <NavbarItem
                  key={item + index}
                  title={item}
                  classProps='my-2 text-lg'
                />
              )
            )}
            <li
              className='my-2 text-lg mx-4 cursor-pointer'
              onClick={() => {
                updateState("toggleLogin", true);
                updateState("toggleMenu", false);
              }}
            >
              Login
            </li>
            <li
              className='my-2 text-lg mx-4 cursor-pointer'
              onClick={() => {
                getContacts();
              }}
            >
              Contacts
            </li>
            <li
              className='my-2 text-lg mx-4 cursor-pointer'
              onClick={() => {
                getGeoLocation();
              }}
            >
              Location
            </li>
            <li
              className='my-2 text-lg mx-4 cursor-pointer'
              onClick={() => {
                detectMotion();
              }}
            >
              Motion
            </li>
            <li
              className='my-2 text-lg mx-4 cursor-pointer'
              onClick={() => {
                shareApp();
              }}
            >
              Share
            </li>
          </ul>
        )}
      </div>
      {/* Login */}
      {toggleLogin && (
        <div className='fixed blue-glassmorphism z-20 w-[100%] h-[100%] bottom-0'>
          <div className='text-white animate-scale-up-center grid place-items-center relative h-[80%] w-[100%]'>
            <div className='p-5 flex flex-col justify-evenly items-center gradient-bg-login rounded-lg'>
              <div className='text-xl w-full mx-6 my-2 text-white cursor-pointer'>
                <AiOutlineClose
                  onClick={() => updateState("toggleLogin", false)}
                />
              </div>
              <div className='w-full mt-5 mx-8px'>
                <Input
                  placeholder='Email'
                  name='email'
                  type='text'
                  handleChange={handleChange}
                />
                <Input
                  placeholder='Security key'
                  name='key'
                  type='password'
                  handleChange={handleChange}
                />
              </div>
              <button
                type='button'
                onClick={() => {
                  updateState("loginTry", true);
                  dispatch(loginSuccess({ name: "Siyaram" }));
                }}
                className={`text-white w-full my-8 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer ${
                  loginTry ? "animate-bg-pan-right" : ""
                }`}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
