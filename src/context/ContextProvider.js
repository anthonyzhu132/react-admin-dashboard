import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (event) => {
    setCurrentMode(event.target.value);
    localStorage.setItem("themeMode", event.target.value);
  };

  const setColor = (event) => {
    setCurrentColor(event.target.value);
    localStorage.setItem("colorMode", event.target.value);
  };

  //Taking state that is clicked, and spreading old initialState, finding state that is clicked and setting to true;
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
    console.log(clicked);
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        currentColor,
        currentMode,
        setCurrentColor,
        setCurrentMode,
        setScreenSize,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
