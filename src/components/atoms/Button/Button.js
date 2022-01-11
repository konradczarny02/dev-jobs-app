import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  background-color: ${({ theme }) => theme.violet};
  font-size: 16px;
  font-weight: 800;
  border-radius: 4px;
  border: none;
  color: white;
`;

const Button = ({ text }) => {
  return (
    <Wrapper>
      <p>{text}</p>
    </Wrapper>
  );
};

export default Button;
