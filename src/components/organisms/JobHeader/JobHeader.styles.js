import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  height: 220px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (min-width: 1440px) {
    width: 70%;
  }

  img {
    position: absolute;
    top: -24px;

    @media (min-width: 700px) {
      top: -25%;
      left: -10px;
      transform: translate(0, 0);
      height: 150%;
    }
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

export const WebsiteName = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSecondary};
`;

export const WebsiteLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.violet};
  height: 48px;
  padding: 0 20px;
  border: none;
  border-radius: 6px;
  font-weight: 800;
  font-size: 16px;
`;
