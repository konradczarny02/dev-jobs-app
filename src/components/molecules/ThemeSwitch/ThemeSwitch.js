import React from 'react';
import { ReactComponent as Sun } from 'assets/images/Sun.svg';
import { ReactComponent as Moon } from 'assets/images/Moon.svg';
import { Wrapper } from 'components/molecules/ThemeSwitch/ThemeSwitch.styles';
import Switch from 'components/atoms/Switch/Switch';

const ThemeSwitch = ({ handleChangeTheme }) => {
  return (
    <Wrapper>
      <Sun />
      <Switch handleChangeTheme={handleChangeTheme} />
      <Moon />
    </Wrapper>
  );
};

export default ThemeSwitch;
