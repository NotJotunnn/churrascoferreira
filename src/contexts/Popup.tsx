import { ReactNode, useContext, createContext, useState, useEffect } from "react";

const popUpContext = createContext({});

export const usePopUpState = () => {
  return useContext(popUpContext);
};

export const PopUpProvider = ({ children }: { children: ReactNode }) => {
  const [ showSidebar, setShowSidebar ] = useState<boolean>(false)
  const [ showImageViewer, setShowImageViewer ] = useState<boolean>(false)

  const [ currentImageIndex, setCurrentImageIndex ] = useState<number>(0)

  useEffect(() => {
    const html = document.querySelector('html')

    const isActivePopups = showSidebar || showImageViewer

    html?.classList.toggle('scrollOff', isActivePopups)
  }, [showSidebar, showImageViewer])

  const toggleShowSidebar = () => setShowSidebar(prev => !prev)

  const toggleShowImageViewer = () => setShowImageViewer(prev => !prev)

  const value = {
    showSidebar,
    setShowSidebar,
    toggleShowSidebar,
    showImageViewer, 
    setShowImageViewer,
    toggleShowImageViewer,
    currentImageIndex, 
    setCurrentImageIndex
  }

  return (
    <popUpContext.Provider value={value}>
      {children}
    </popUpContext.Provider>
  );
};
