import { ReactNode, useContext, createContext, useState } from "react";

const popUpContext = createContext({});

export const usePopUpState = () => {
  return useContext(popUpContext);
};

export const PopUpProvider = ({ children }: { children: ReactNode }) => {
  const [ showSidebar, setShowSidebar ] = useState<boolean>(false)

  const toggleShowSidebar = () => {
    setShowSidebar(prev => !prev)
  }

  const value = {
    showSidebar,
    setShowSidebar,
    toggleShowSidebar
  }

  return (
    <popUpContext.Provider value={value}>
      {children}
    </popUpContext.Provider>
  );
};
