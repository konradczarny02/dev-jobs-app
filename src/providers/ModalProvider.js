import React, { useState } from 'react';

export const ModalContext = React.createContext({
  isOpen: false,
  handleModalOpen: () => {},
  handleCloseModal: () => {},
});

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModalOpen = () => setIsOpen((prevState) => !prevState);
  const handleCloseModal = () => setIsOpen(false);

  return <ModalContext.Provider value={{ isOpen, handleModalOpen, handleCloseModal }}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
