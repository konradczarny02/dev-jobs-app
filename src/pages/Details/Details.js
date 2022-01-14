import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate';
import { JobsContext } from 'providers/JobsProvider';
import JobHeader from 'components/organisms/JobHeader/JobHeader';
import JobDetails from 'components/organisms/JobDetails/JobDetails';
import Footer from 'components/organisms/Footer/Footer';

const Details = () => {
  let params = useParams();
  const { jobs } = useContext(JobsContext);
  const job = jobs.find((job) => job.company === params.company);
  return (
    <MainTemplate>
      <JobHeader details={job} />
      <JobDetails details={job} />
      <Footer />
    </MainTemplate>
  );
};

export default Details;
