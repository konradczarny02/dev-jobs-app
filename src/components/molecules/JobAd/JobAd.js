import React from 'react';
import {
  Wrapper,
  DetailsWrapper,
  Date,
  WorkingHours,
  JobPosition,
  Company,
  Location,
} from 'components/molecules/JobAd/JobAd.styles';

const JobAd = ({ details }) => {
  return (
    <Wrapper>
      <DetailsWrapper>
        <Date>5h ago</Date>
        <WorkingHours>Full Time</WorkingHours>
        <JobPosition>Senior Software Engineer</JobPosition>
        <Company>Scoot</Company>
        <Location>United Kingdom</Location>
      </DetailsWrapper>
    </Wrapper>
  );
};

export default JobAd;
