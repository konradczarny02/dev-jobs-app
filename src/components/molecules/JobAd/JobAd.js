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
  const img = require('assets/JobAdsLogos/' + details.company.toLowerCase().split(' ').join('') + '.svg');
  return (
    <Wrapper>
      <img src={img} alt="logo" />
      <DetailsWrapper>
        <Date>{details.postedAt}</Date>
        <WorkingHours>{details.contract}</WorkingHours>
        <JobPosition>{details.position}</JobPosition>
        <Company>{details.company}</Company>
        <Location>{details.location}</Location>
      </DetailsWrapper>
    </Wrapper>
  );
};

export default JobAd;
