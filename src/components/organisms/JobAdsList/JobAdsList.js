import React, { useContext } from 'react';
import { ListWrapper } from 'components/organisms/JobAdsList/JobAdsList.styles';
import JobAd from 'components/molecules/JobAd/JobAd';
import { JobsContext } from 'providers/JobsProvider';

const JobAdsList = () => {
  const { jobs } = useContext(JobsContext);
  return (
    <ListWrapper>{jobs.length > 0 ? jobs.map((job) => <JobAd key={job.id} details={job} />) : <p>Loading...</p>}</ListWrapper>
  );
};

export default JobAdsList;
