import styled from 'styled-components';
import CheckImg from './assets/check.png';
import TimesImg from './assets/times.png';
import totalbackground from './assets/back-image.png';

import markcheck from '../../../../assets/checkico.svg';
import marktimes from '../../../../assets/timesico.svg';

interface IChecked {
  isChecked: boolean;
}

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fontNormal};
  font-style: ${({ theme }) => theme.fontStyleNormal};
`;

export const DateRange = styled.div`
  font-weight: ${({ theme }) => theme.weightBold};
  font-size: ${({ theme }) => theme.fontSizeXXL};
  line-height: 26px;
  color: ${({ theme }) => theme.primaryBlueDark};
`;

export const CardContainer = styled.div`
  margin-top: 24px;
  display: ${({ theme }) => theme.displayTypeFlex};
  justify-content: ${({ theme }) => theme.contentSpaceBetween};
  align-items: ${({ theme }) => theme.alignItemCenter};
  margin-bottom: 30px;
`;

export const AttendanceCard = styled.div`
  height: 420px;
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  box-sizing: ${({ theme }) => theme.boxSizingBorderBox};
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.slightGrey};
  opacity: 0.5;
  &.active {
    border: none;
    box-shadow: 0px 10px 20px 0px
      ${({ theme }) => theme.secondaryBlackTransLight};
    opacity: 1;
  }
  cursor: ${({ theme }) => theme.cursorPointer};
`;

export const TotalSpan = styled.div`
  width: ${({ theme }) => theme.widthFull};
  height: 58px;
  background: url(${totalbackground}) no-repeat;
  background-size: cover;
  mix-blend-mode: normal;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  opacity: 1;
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
  padding: 16px;

  div:first-child {
    margin-right: 20px;
  }
`;

export const TotalSpanGreen = styled.div`
  width: 136px;
  height: 58px;
  background: linear-gradient(
      225deg,
      rgba(255, 255, 255, 0.15) 0.03%,
      rgba(255, 255, 255, 1.5e-5) 100%
    ),
    ${({ theme }) => theme.secondaryGreenDark};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
  padding: 16px;
`;

export const TotalSpanRed = styled.div`
  width: 136px;
  height: 58px;
  background: linear-gradient(
      225deg,
      rgba(255, 255, 255, 0.15) 0.03%,
      rgba(255, 255, 255, 1.5e-5) 100%
    ),
    ${({ theme }) => theme.secondaryRed};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
  padding: 16px;
`;

export const IcoCheck = styled.div`
  width: 26px;
  height: 26px;
  background: url(${CheckImg});
  margin-right: 10px;
`;

export const IcoTimes = styled.div`
  width: 26px;
  height: 26px;
  background: url(${TimesImg});
  margin-right: 10px;
`;

export const TotalNumber = styled.div`
  font-weight: ${({ theme }) => theme.weightHeavy};
  font-size: ${({ theme }) => theme.modalIconFontSize};
  line-height: 36px;
  color: ${({ theme }) => theme.primaryWhite};
`;

export const TotalText = styled.div`
  font-weight: ${({ theme }) => theme.weightBold};
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.primaryWhite};
`;

export const AttendanceInfo = styled.div`
  width: 65%;
  display: ${({ theme }) => theme.displayTypeFlex};
  flex-direction: ${({ theme }) => theme.flexColumn};
  margin-left: 20px;
  div {
    display: ${({ theme }) => theme.displayTypeFlex};
    justify-content: ${({ theme }) => theme.contentSpaceBetween};
  }
  div span {
    font-weight: ${({ theme }) => theme.weightBold};
    font-size: ${({ theme }) => theme.fontSizeExtraLarge};
    line-height: ${({ theme }) => theme.lineHeight};
    color: ${({ theme }) => theme.primaryBlueLight};
  }
`;
export const CardContent = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
  margin-bottom: 10px;
  input {
    margin-left: 65px;
    display: flex;
  }
`;
export const CustomRadio = styled.div<IChecked>`
  width: 15px;
  height: 15px;
  border-radius: ${({ theme }) => theme.borderRadiusHalf};
  margin-left: 65px;
  border: ${({ isChecked, theme }) =>
    isChecked
      ? `4px solid ${theme.primaryBlueLight}`
      : `2px solid ${theme.primaryBlueLight}`};
`;
export const RadioCover = styled.div``;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const PresentList = styled.div`
  height: 345px;
  margin-top: 25px;
  padding: 0 35px;
  ul {
    list-style-image: url('${markcheck}');
  }
`;

export const AbsanceList = styled.div`
  height: 345px;
  margin-top: 25px;
  padding: 0 35px;
  ul {
    list-style-image: url('${marktimes}');
  }
`;

export const ListWrap = styled.ul``;

export const List = styled.li`
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizeLarge};
  line-height: 19px;
  color: ${({ theme }) => theme.secondaryFontDark};
  margin-bottom: 20px;
`;
