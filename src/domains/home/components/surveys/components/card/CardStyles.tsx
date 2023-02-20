import styled from 'styled-components';

export const Avatar = styled.img`
  position: relative;
  left: 75%;
  margin-top: -60px;
  height: 80px;
  width: 80px;
`;

export const Container = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 25px 20px 20px 25px;
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.primaryWhite};
  box-shadow: 10px 10px 30px 0px ${({ theme }) => theme.secondaryGrayDarkTrans};
  min-height: ${({ theme }) => theme.surveyCardsMinHeight};
  height: auto;
  margin-top: ${({ theme }) => theme.surveyCardsRightMargin};

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    width: 100%;
    height: auto;
    margin-right: 0px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    width: 346px;
    height: 214px;
    margin-right: ${({ theme }) => theme.surveyCardsRightMargin};
  }

  h4 {
    text-align: left;
    margin-top: -20px;
  }
`;

export const QuestionText = styled.div`
  text-align: left;
  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.secondaryFontDark};
`;

export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 7px 0px 7px 0px;
  :first-child {
    margin: 0px 0px 7px 0px;
  }

  ${QuestionText} {
    margin-left: 10px;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;
