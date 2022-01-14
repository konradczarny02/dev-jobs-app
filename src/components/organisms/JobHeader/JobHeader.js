import React from 'react';
import { Wrapper, Title, WebsiteName, WebsiteLink } from 'components/organisms/JobHeader/JobHeader.styles';

const JobHeader = ({ details }) => {
  const img = require('assets/JobAdsLogos/' + details.company.toLowerCase().split(' ').join('') + '.svg');
  console.log(details);
  return (
    <Wrapper>
      <img src={img} alt="Logo" />
      <Title>{details.company}</Title>
      <WebsiteName>{`${details.company}.com`}</WebsiteName>
      <WebsiteLink href={details.website} target="_blank">
        Company Site
      </WebsiteLink>
    </Wrapper>
  );
};

export default JobHeader;
