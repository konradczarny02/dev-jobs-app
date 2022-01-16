import styled from 'styled-components';

export const Wrapper = styled.form`
  width: 90%;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  height: 80px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const InputWrapper = styled.div`
  flex-basis: 33%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    border-right: 2px solid ${({ theme }) => theme.background};
  }

  svg {
    margin: 0 10px;
  }

  input {
    width: 90%;
    margin-left: 10px;
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

export const FullTimeWrapper = styled(InputWrapper)`
  display: none;
  color: ${({ theme }) => theme.text};

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    input {
      width: 24px;
      height: 24px;
    }
  }

  @media (min-width: 1440px) {
    flex-basis: 30%;
    svg {
      margin-left: 30px;
    }
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const LocationWrapper = styled(InputWrapper)`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1440px) {
    flex-basis: 30%;
    svg {
      margin-left: 30px;
    }
  }
`;

export const SearchWrapper = styled(InputWrapper)`
  flex-basis: 40%;

  svg {
    display: none;
  }

  @media (min-width: 768px) {
    flex-basis: 33%;
    svg {
      display: block;
    }
  }

  @media (min-width: 1440px) {
    flex-basis: 45%;
    svg {
      margin-left: 30px;
    }
  }
`;
