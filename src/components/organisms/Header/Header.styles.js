import styled from 'styled-components';
import bgMobileSvg from 'assets/images/bgMobile.svg';
import bgDesktopSvg from 'assets/images/bgDesktop.svg';
import bgTabletSvg from 'assets/images/bgTablet.svg';

export const Wrapper = styled.div`
  width: 100%;
  height: 160px;
  background-image: ${`url(${bgMobileSvg})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 376px) {
    background-image: ${`url(${bgTabletSvg})`};
  }

  @media (min-width: 769px) {
    background-image: ${`url(${bgDesktopSvg})`};
  }
`;

export const HeaderWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
