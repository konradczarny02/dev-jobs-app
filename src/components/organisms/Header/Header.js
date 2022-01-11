import React from 'react';
import ThemeSwitch from 'components/molecules/ThemeSwitch/ThemeSwitch';
import { Wrapper, HeaderWrapper } from 'components/organisms/Header/Header.styles';
import { ReactComponent as Logo } from 'assets/images/Logo.svg';

const Header = ({ handleChangeTheme }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Logo />
        <ThemeSwitch handleChangeTheme={handleChangeTheme} />
      </HeaderWrapper>
    </Wrapper>
  );
};

export default Header;
