import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  DetailsWrapper,
  PostedAt,
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
        <PostedAt isMargin>{details.postedAt}</PostedAt>
        <WorkingHours isMargin>{details.contract}</WorkingHours>
        <JobPosition>{details.position}</JobPosition>
        <Company>{details.company}</Company>
        <Location isMargin>{details.location}</Location>
      </DetailsWrapper>
    </Wrapper>
  );
};

export default JobAd;
