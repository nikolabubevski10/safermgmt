import styled from 'styled-components';

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fontNormal};
  font-style: ${({ theme }) => theme.fontStyleNormal};
  width: 328px;
  height: 420px;
  background: ${({ theme }) => theme.primaryWhite};
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  box-shadow: 0px 0px 30px 0px ${({ theme }) => theme.secondaryBlackTransLight};
  padding: 15px 20px;
  margin-top: 30px;
`;

export const GraphHeader = styled.div``;

export const DotSuccess = styled.span`
  display: block;
  background: linear-gradient(
      225deg,
      rgba(255, 255, 255, 0.15) 0.03%,
      rgba(255, 255, 255, 1.5e-5) 100%
    ),
    ${({ theme }) => theme.secondaryGreenDark};
  height: 8px;
  width: 8px;
  border-radius: ${({ theme }) => theme.borderRadiusHalf};
`;

export const HeaderTitle = styled.span`
  font-weight: ${({ theme }) => theme.weightBold};
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.primaryBlueLight};
`;

export const GraphContent = styled.div`
  margin-top: 25px;
`;

export const Graph = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: baseline;
  margin-bottom: 15px;
`;

export const GraphName = styled.div`
  width: 30px;
`;

export const GraphData = styled.div`
  margin-left: 15px;
  display: ${({ theme }) => theme.displayTypeFlex};
  flex-direction: ${({ theme }) => theme.flexColumn};
  width: ${({ theme }) => theme.widthFull};
  min-height: 36px;
`;
// eslint-disable-next-line
export const GraphBar = styled.span<any>`
  height: 16px;
  width: ${(p) => p.width};
  background: linear-gradient(
      225deg,
      rgba(255, 255, 255, 0.15) 0.03%,
      rgba(255, 255, 255, 1.5e-5) 100%
    ),
    ${(p) =>
      p.Absent
        ? ({ theme }) => theme.secondaryRed
        : ({ theme }) => theme.secondaryGreenDark};
  margin-top: 2px;
  text-align: right;
  padding-right: 10px;
  font-weight: ${({ theme }) => theme.weightBoldX};
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.primaryWhite};

  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
`;
export const SubHead = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
`;
export const SubHeadText = styled.span`
  margin-left: 6px;
`;

export const DotFail = styled.span`
  display: block;
  background: linear-gradient(
      225deg,
      rgba(255, 255, 255, 0.15) 0.03%,
      rgba(255, 255, 255, 1.5e-5) 100%
    ),
    ${({ theme }) => theme.secondaryRed};
  height: 8px;
  width: 8px;
  border-radius: ${({ theme }) => theme.borderRadiusHalf};
`;

export const SubHeadWrap = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  justify-content: ${({ theme }) => theme.contentSpaceBetween};
  margin-top: 10px;
`;
