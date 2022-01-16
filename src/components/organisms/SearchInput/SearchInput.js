import React, { useContext } from 'react';
import { JobsContext } from 'providers/JobsProvider';
import {
  Wrapper,
  FilterWrapper,
  FullTimeWrapper,
  LocationWrapper,
  SearchWrapper,
} from 'components/organisms/SearchInput/SearchInput.styles';
import SearchButtonSmall from 'components/atoms/SearchButton/SearchButtonSmall';
import { ReactComponent as FilterIcon } from 'assets/images/filterSvg.svg';
import { ReactComponent as SearchIcon } from 'assets/images/searchIconViolet.svg';
import { ReactComponent as LocationIcon } from 'assets/images/location.svg';
import SearchButton from 'components/atoms/SearchButton/SearchButton';

const SearchInput = () => {
  const { filters, handleFullTimeFilter, handleTitleFilter, handleLocationFilter } = useContext(JobsContext);
  console.log(filters);
  return (
    <Wrapper>
      <SearchWrapper>
        <SearchIcon />
        <input type="text" placeholder="Filter by title..." onChange={(event) => handleTitleFilter(event.target.value)} />
      </SearchWrapper>
      <LocationWrapper>
        <LocationIcon />
        <input type="text" placeholder="Filter by location" onChange={(event) => handleLocationFilter(event.target.value)} />
      </LocationWrapper>
      <FilterWrapper>
        <FilterIcon />
        <SearchButtonSmall />
      </FilterWrapper>
      <FullTimeWrapper>
        <input type="checkbox" onChange={(event) => handleFullTimeFilter(event.target.value)} />
        <h4>Full Time</h4>
        <SearchButton />
      </FullTimeWrapper>
    </Wrapper>
  );
};

export default SearchInput;
