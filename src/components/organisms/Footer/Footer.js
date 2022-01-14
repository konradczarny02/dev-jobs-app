import React from 'react';
import { Wrapper } from 'components/organisms/Footer/Footer.styles';
import { ApplyLink } from 'components/atoms/ApplyButton/ApplyButton';

const Footer = () => {
  return (
    <Wrapper>
      <ApplyLink href={'https://google.com'} isBig>
        Apply Now
      </ApplyLink>
    </Wrapper>
  );
};

export default Footer;
