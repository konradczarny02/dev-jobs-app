import React from 'react';
import { Wrapper } from 'components/organisms/SearchInput/SearchInput.styles';
import SearchButtonSmall from 'components/atoms/SearchButton/SearchButtonSmall';
import { ReactComponent as FilterIcon } from 'assets/images/filterSvg.svg';

const SearchInput = () => {
  return (
    <Wrapper>
      <input type="text" placeholder="Filter by title..." />
      <FilterIcon />
      <SearchButtonSmall />
    </Wrapper>
  );
};

export default SearchInput;
