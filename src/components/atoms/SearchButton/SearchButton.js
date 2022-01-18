import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  height: 48px;
  width: 80px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.violet};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  p {
    font-weight: 600;
    font-size: 16px;
    color: ${({ theme }) => theme.backgroundSecondary};
  }
`;

const SearchButton = () => {
  return (
    <Wrapper>
      <p>Search</p>
    </Wrapper>
  );
};

export default SearchButton;
