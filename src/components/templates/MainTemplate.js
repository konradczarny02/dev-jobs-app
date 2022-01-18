import React from 'react';
import Header from 'components/organisms/Header/Header';
import { Wrapper } from 'components/templates/MainTemplates.styles';
import Modal from 'components/organisms/Modal/Modal';
import ModalProvider from 'providers/ModalProvider';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <ModalProvider>
        <Header />
        {children}
        <Modal />
      </ModalProvider>
    </Wrapper>
  );
};

export default MainTemplate;
