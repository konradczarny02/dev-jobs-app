import React from 'react';
import Header from 'components/organisms/Header/Header';
import { Wrapper } from 'components/templates/MainTemplates.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
