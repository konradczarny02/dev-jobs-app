import styled from 'styled-components';

export const ListWrapper = styled.ul`
  width: 90%;
  display: grid;
  grid-template-columns: 100%;
  align-items: center;
  justify-items: center;
  grid-gap: 10px;
  padding: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 50%);
  }
  @media (min-width: 1150px) {
    grid-template-columns: repeat(3, 33%);
  }

  @media (min-width: 1500px) {
    grid-template-columns: repeat(4, 25%);
  }
`;
