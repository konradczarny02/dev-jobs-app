import React from 'react';
import Header from 'components/organisms/Header/Header';
import { Wrapper } from 'components/templates/MainTemplates.styles';

const MainTemplate = ({ children, handleChangeTheme }) => {
  return (
    <Wrapper>
      <Header handleChangeTheme={handleChangeTheme} />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
