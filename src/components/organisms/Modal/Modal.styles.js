import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  width: 90%;
  height: 250px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;
