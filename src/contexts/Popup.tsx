import { ReactNode, useContext, createContext, useState, useEffect } from "react";

const popUpContext = createContext({});

export const usePopUpState = () => {
  return useContext(popUpContext);
};

export const PopUpProvider = ({ children }: { children: ReactNode }) => {
  const [ showSidebar, setShowSidebar ] = useState<boolean>(false)

  useEffect(() => {
    const html = document.querySelector('html')

    html?.classList.toggle('scrollOff', showSidebar)
  }, [showSidebar])

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
