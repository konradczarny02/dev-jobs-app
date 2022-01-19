import styled from 'styled-components';

export const ApplyLink = styled.a`
  text-decoration: none;
  color: white;
  background-color: ${({ theme }) => theme.violet};
  border-radius: 6px;
  width: ${({ isBig }) => (isBig ? '100%' : '140px')};
  height: 48px;
  margin-top: ${({ isMargin }) => (isMargin ? '50px' : '0')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;

  @media (min-width: 700px) {
    width: 150px;
  }
`;
