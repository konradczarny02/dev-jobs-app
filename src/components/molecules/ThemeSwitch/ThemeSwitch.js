import React, { useContext } from 'react';
import { ReactComponent as Sun } from 'assets/images/Sun.svg';
import { ReactComponent as Moon } from 'assets/images/Moon.svg';
import { Wrapper } from 'components/molecules/ThemeSwitch/ThemeSwitch.styles';

const ThemeSwitch = ({ handleChangeTheme }) => {
  return (
    <Wrapper>
      <Sun />
      <button onClick={handleChangeTheme}></button>
      <Moon />
    </Wrapper>
  );
};

export default ThemeSwitch;
