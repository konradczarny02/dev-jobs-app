import styled from 'styled-components';

export const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span:before {
      transform: translateX(20px);
    }
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    transition: 0.4s;
    border-radius: 16px;

    &::before {
      position: absolute;
      content: '';
      height: 14px;
      width: 14px;
      left: 4px;
      bottom: 4px;
      background-color: ${({ theme }) => theme.violet};
      transition: 0.4s;
      border-radius: 50%;
    }
  }
`;
