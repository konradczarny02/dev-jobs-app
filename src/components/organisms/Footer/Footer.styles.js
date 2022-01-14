import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 5%;
  margin-top: 40px;
  border-radius: 6px 0 0 6px;
  height: 96px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
