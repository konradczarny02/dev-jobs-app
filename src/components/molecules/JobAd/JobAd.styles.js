import styled from 'styled-components';

export const Wrapper = styled.li`
  cursor: pointer;
  list-style: none;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  width: 330px;
  height: 240px;
  position: relative;
  padding: 40px 30px 30px 30px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    top: -15px;
    left: 30px;
  }
`;

export const DetailsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const PostedAt = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.textSecondary};
  flex-basis: ${({ isBig }) => (isBig ? '30%' : '8%')};
  position: relative;
  margin: ${({ isMargin }) => (isMargin ? '16px 0' : '0')};
}

&::after {
  top: 50%;
  right: 15%;
  position: absolute;
  content: '';
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.textSecondary};
}
`;

export const WorkingHours = styled(PostedAt)`
  flex-basis: 70%;
  margin: ${({ isMargin }) => (isMargin ? '16px 0' : '0')};

  &::after {
    display: none;
  }
`;

export const JobPosition = styled.h3`
  color: ${({ theme }) => theme.text};
  flex-basis: 100%;
  margin: 5px 0;
`;

export const Company = styled(PostedAt)`
  flex-basis: 100%;

  &::after {
    display: none;
  }
`;

export const Location = styled.p`
  position: relative;
  margin: ${({ isMargin }) => (isMargin ? '16px 0' : '0')};
  flex-basis: 100%;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.violet};
`;
