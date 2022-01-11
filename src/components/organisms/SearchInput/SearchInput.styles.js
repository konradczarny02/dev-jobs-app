import styled from 'styled-components';

export const Wrapper = styled.form`
  width: 90%;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  height: 80px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;

  input {
    width: 60%;
    height: 48px;
    border: none;
    background-color: ${({ theme }) => theme.backgroundSecondary};
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.placeholderText};

    &::placeholder {
      font-size: 16px;
      font-weight: 400;
      color: ${({ theme }) => theme.placeholderText};
    }
  }
  input:focus {
    outline: none;
  }
`;
