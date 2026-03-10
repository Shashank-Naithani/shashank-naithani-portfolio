import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [navHeight, setNavHeight] = useState(0);

  const value = {
    navHeight,
    setNavHeight,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// custom hook for cleaner usage
export const useAppContext = () => {
  return useContext(AppContext);
};
