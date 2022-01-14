import React from 'react';
import { Wrapper } from 'components/molecules/Requirements/Requirements.styles';

const Requirements = ({ requirements: { content, items } }) => {
  return (
    <Wrapper>
      <h2>Requirements</h2>
      <p>{content}</p>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Requirements;
