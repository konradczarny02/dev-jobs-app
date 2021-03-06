import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 6px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 1440px) {
    min-width: calc(1440px * 0.9);
    width: 60%;
  }
`;

export const Description = styled.p`
  margin-top: 20px;
  width: 100%;
  font-weight: 400;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.4;
`;
