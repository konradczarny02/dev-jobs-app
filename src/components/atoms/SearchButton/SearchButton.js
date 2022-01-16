import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 48px;
  width: 80px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.violet};
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 600;
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
