import React from 'react';
import { ReactComponent as SearchIcon } from 'assets/images/SearchIcon.svg';
import styled from 'styled-components';

const Wrapper = styled.button`
  border: none;
  height: 48px;
  width: 48px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.violet};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchButtonSmall = () => {
  return (
    <Wrapper>
      <SearchIcon />
    </Wrapper>
  );
};

export default SearchButtonSmall;
