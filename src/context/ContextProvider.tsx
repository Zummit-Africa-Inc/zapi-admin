import React, { createContext, useContext, useState } from "react";

interface IChildren {
  children: React.ReactNode;
}

const AppContext = createContext<any | null>(null);

const initialState = { feedback: false };

export const ContextProvider: React.FC<IChildren> = ({ children }) => {
  const [isClicked, setIsClicked] = useState<{}>(initialState);

  const handleClicked = (clicked: string) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const handleUnclicked = (clicked: string) => {
    setIsClicked({ ...initialState, [clicked]: false });
  };

  const values = {
    isClicked,
    handleClicked,
    handleUnclicked,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useContextProvider = () => useContext(AppContext);
