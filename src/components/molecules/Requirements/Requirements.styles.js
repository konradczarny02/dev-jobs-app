import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  h2 {
    color: ${({ theme }) => theme.text};
    font-size: 20px;
    font-weight: 800;
  }

  p {
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.4;
    font-size: 16px;
    font-weight: 400;
  }

  ul {
    list-style-type: none;
  }

  li {
    color: ${({ theme }) => theme.textSecondary};
    margin: 10px 0;
    position: relative;

    &::before {
      content: '';
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.violet};
      position: absolute;
      top: 50%;
      left: -38px;
      transform: translateY(-50%);
    }
  }
`;
