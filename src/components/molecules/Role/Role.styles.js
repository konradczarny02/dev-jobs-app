import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  h2 {
    font-size: 20px;
    color: ${({ theme }) => theme.text};
  }

  p {
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.4;
  }

  ol {
    list-style: none;
    counter-reset: my-counter;
  }

  li {
    position: relative;
    color: ${({ theme }) => theme.textSecondary};
    counter-increment: my-counter;
    margin: 10px 0;

    &::before {
      position: absolute;
      content: counter(my-counter);
      top: 0;
      font-weight: 600;
      left: -40px;
      color: ${({ theme }) => theme.violet};
    }
  }
`;
