import styled from 'styled-components';

export const Container = styled.div`
  z-index: 2;
  cursor: pointer;
  box-sizing: border-box;
  height: auto;
  width: 100%;
  padding: 25px;
  display: flex;
  margin-bottom: 10px;
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  background-color: ${({ theme }) => theme.secondaryGrayLight};
  :hover {
    z-index: 3;
    box-shadow: 0px 15px 20px 0px ${({ theme }) => theme.secondaryGrayMedium};
  }
`;

export const SurveyName = styled.div`
  font-weight: 800;
  font-size: 23px;
  line-height: 28px;
  color: ${({ theme }) => theme.primaryBlueLight};
  :hover {
    text-decoration: underline;
  }
`;

export const EndContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: auto;
  padding-left: 25px;
`;
