import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../icons/Krypt-logos_transparent.png";
import {
  detectMotion,
  getContacts,
  getGeoLocation,
  shareApp,
} from "./../features";
import Login from "./Login";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};
const Navbar = () => {
  // const count = useSelector(loginSelector);
  const [state, setState] = useState({
    toggleMenu: false,
    toggleLogin: false,
    loginTry: false,
  });
  const { toggleMenu, toggleLogin } = state;

  function updateState(stateKey, stateValue) {
    console.log(stateKey, stateValue);
    setState((prevState) => {
      return { ...prevState, [stateKey]: stateValue };
    });
  }

  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center item-center'>
        <img src={logo} alt='logo' className=' w-[344px]' />
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
        <Login setToggle={() => updateState("toggleLogin", false)} />
      )}
    </nav>
  );
};

export default Navbar;
