import styled from 'styled-components';

const Button = styled.div<{
  isDisabled: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer;

  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: ${({ theme }) => theme.weightBold};
  font-size: 18px;
  line-height: 22px;

  width: 192px;
  height: 52px;
  min-width: 192px;
  min-height: 52px;

  background: linear-gradient(
      224.33deg,
      rgba(0, 0, 0, 0.2) 5.75%,
      rgba(255, 255, 255, 2e-5) 71.65%
    ),
    #fdd119;
  background-blend-mode: overlay, normal;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};

  box-shadow: 0px 10px 20px 0px
    ${({ theme, isDisabled }) =>
      isDisabled ? theme.secondaryGrayMedium : theme.secondaryYellowLightTrans};

  color: ${({ theme }) => theme.secondaryBlueDark};
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ isDisabled, theme }) =>
    isDisabled ? theme.secondaryGrayMedium : 'auto'};
  :hover {
    background: ${({ theme, isDisabled }) =>
      isDisabled ? theme.secondaryGrayMedium : theme.secondaryYellowLight};
  }
`;

export const BackButtonContainer = styled.div`
  margin-top: 12px;
`;

export const SmallScreenSaveButton = styled(Button)<{
  isDisabled: boolean;
}>`
  display: flex;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min + 100}px) {
    display: none;
  }
`;

export const LargeScreenSaveButton = styled(Button)<{
  isDisabled: boolean;
}>`
  height: 0px;
  width: 0px;
  display: none;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min + 100}px) {
    display: flex;
    min-width: 192px;
    min-height: 52px;
  }
`;

export const SmallScreenTopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min + 100}px) {
    display: none;
  }
`;
export const LargeScreenTopContainer = styled.div`
  width: 100%;
  align-items: flex-start;
  height: 0px;
  width: 0px;
  display: none;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min + 100}px) {
    display: flex;
    height: auto;
    width: auto;
  }
`;

export const SmallScreenTopInner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min + 100}px) {
    display: none;
  }
`;

export const LargeScreenTopInner = styled.div`
  height: 0px;
  width: 0px;
  display: flex;
  flex-grow: 1;
  padding-right: 20px;
  align-items: flex-start;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min + 100}px) {
    height: auto;
    width: auto;
  }
`;

export const Name = styled.div`
  font-weight: ${({ theme }) => theme.weightFullBold};
  font-size: 35px;
  line-height: 43px;
  flex-grow: 1;
  min-width: 0px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.primaryBlueDark};
  font-family: ${({ theme }) => theme.fontBold};
  border-radius: ${({ theme }) => theme.borderRadiusXL};
  padding: 3px 3px 3px 0px;
`;

export const SaveButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;
