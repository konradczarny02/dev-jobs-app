import React from 'react';
import { Wrapper } from 'components/molecules/Role/Role.styles';

const Role = ({ role: { content, items } }) => {
  return (
    <Wrapper>
      <h2>What You Will Do</h2>
      <p>{content}</p>
      <ol>
        {items.map((item, index) => (
          <li number={index + 1}>{item}</li>
        ))}
      </ol>
    </Wrapper>
  );
};

export default Role;
