import React from 'react';
import Header from 'components/organisms/Header/Header';

const MainTemplate = ({ children, handleChangeTheme }) => {
  return (
    <>
      <Header handleChangeTheme={handleChangeTheme} />
      {children}
    </>
  );
};

export default MainTemplate;
