import React, { useState } from 'react';

export const ModalContext = React.createContext({
  isOpen: false,
  handleModalOpen: () => {},
});

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModalOpen = () => setIsOpen((prevState) => !prevState);

  return <ModalContext.Provider value={{ isOpen, handleModalOpen }}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
