import React from 'react';
import { useParams } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate';

const Details = ({ handleChangeTheme }) => {
  let params = useParams();
  return (
    <MainTemplate handleChangeTheme={handleChangeTheme}>
      <h1>{params.company}</h1>
    </MainTemplate>
  );
};

export default Details;
