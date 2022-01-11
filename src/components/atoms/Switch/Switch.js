import React from 'react';
import { SwitchWrapper } from 'components/atoms/Switch/Switch.styles';

const Switch = ({ handleChangeTheme }) => {
  return (
    <SwitchWrapper>
      <input type="checkbox" onClick={handleChangeTheme} />
      <span></span>
    </SwitchWrapper>
  );
};

export default Switch;
