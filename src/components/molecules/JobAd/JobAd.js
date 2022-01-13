import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  let navigate = useNavigate();
  const img = require('assets/JobAdsLogos/' + details.company.toLowerCase().split(' ').join('') + '.svg');
  return (
    <Wrapper onClick={() => navigate('/details/' + details.company)}>
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
