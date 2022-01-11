import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import SearchInput from 'components/organisms/SearchInput/SearchInput';
import JobAdsList from 'components/organisms/JobAdsList/JobAdsList';

const Home = ({ handleChangeTheme }) => {
  return (
    <MainTemplate handleChangeTheme={handleChangeTheme}>
      <SearchInput />
      <JobAdsList />
    </MainTemplate>
  );
};

export default Home;
