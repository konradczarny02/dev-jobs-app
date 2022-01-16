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
  const { filters, handleSearch, handleFullTimeFilter, handleTitleFilter, handleLocationFilter } = useContext(JobsContext);

  return (
    <Wrapper onSubmit={(event) => handleSearch(event)}>
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
        <input type="checkbox" onChange={handleFullTimeFilter} />
        <h4>Full Time</h4>
        <SearchButton type="submit" />
      </FullTimeWrapper>
    </Wrapper>
  );
};

export default SearchInput;
