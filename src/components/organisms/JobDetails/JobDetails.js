import React from 'react';
import { Wrapper, Description } from 'components/organisms/JobDetails/JobDetails.styles';
import { PostedAt, Location, WorkingHours, JobPosition } from 'components/molecules/JobAd/JobAd.styles';
import { ApplyLink } from 'components/atoms/ApplyButton/ApplyButton';
import Requirements from 'components/molecules/Requirements/Requirements';
import Role from 'components/molecules/Role/Role';

const JobDetails = ({ details }) => {
  return (
    <Wrapper>
      <PostedAt>{details.postedAt}</PostedAt>
      <WorkingHours>{details.contract}</WorkingHours>
      <JobPosition>{details.position}</JobPosition>
      <Location>{details.location}</Location>
      <ApplyLink isMargin isBig href={details.apply} target="_blank">
        Apply Now
      </ApplyLink>
      <Description>{details.description}</Description>
      <Requirements requirements={details.requirements} />
      <Role role={details.role} />
    </Wrapper>
  );
};

export default JobDetails;
