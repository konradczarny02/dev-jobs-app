import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from 'components/organisms/Modal/Modal.styles';
import { ModalContext } from 'providers/ModalProvider';

const modalContainer = document.getElementById('modal-container');

const Modal = () => {
  const { isOpen } = useContext(ModalContext);
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(<Wrapper></Wrapper>, modalNode);
};

export default Modal;
