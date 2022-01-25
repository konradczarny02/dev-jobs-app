import styled from 'styled-components';

export const Wrapper = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  width: 90%;
  height: 250px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  input[type='submit'] {
    background-color: ${({ theme }) => theme.violet};
    border: none;
    width: 90%;
    border-radius: 6px;
    height: 48px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    margin-bottom: 20px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 2px solid ${({ theme }) => theme.background};

  svg {
    margin-right: 15px;
  }

  input {
    background-color: ${({ theme }) => theme.backgroundSecondary};
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textSecondary};
    flex-basis: 80%;
    height: 100%;
    font-size: 16px;

    &::placeholder {
      color: ${({ theme }) => theme.textSecondary};
    }
  }
`;

export const ModalBackground = styled.div`
  ::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    opacity: 0.5;
    background-color: #000;
  }
`;
