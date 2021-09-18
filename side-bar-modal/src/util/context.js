import React, { useContext, useState } from "react";

//creates the context
const AppContext = React.createContext();

//creats the provide
export const AppProvider = ({ children }) => {
  //use hooks & functions;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  //return
  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
        sidebarOpen,
        modalOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//create custom hook for importing values
export const useAppContext = () => {
  return useContext(AppContext);
};
