import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
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
import { ModalContext } from 'providers/ModalProvider';

const SearchInput = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { handleModalOpen } = useContext(ModalContext);
  const { handleSearch } = useContext(JobsContext);

  return (
    <Wrapper onSubmit={handleSubmit(handleSearch)}>
      <SearchWrapper>
        <SearchIcon />
        <input type="text" placeholder="Filter by title..." {...register('title')} />
      </SearchWrapper>
      <LocationWrapper>
        <LocationIcon />
        <input type="text" placeholder="Filter by location" {...register('location')} />
      </LocationWrapper>
      <FilterWrapper>
        <FilterIcon onClick={handleModalOpen} />
        <SearchButtonSmall type="submit" />
      </FilterWrapper>
      <FullTimeWrapper>
        <input type="checkbox" {...register('fullTime')} />
        <h4>Full Time</h4>
        <SearchButton type="submit" />
      </FullTimeWrapper>
    </Wrapper>
  );
};

export default SearchInput;
