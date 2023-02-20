import styled, { createGlobalStyle } from 'styled-components';
export const Container = styled.div`
  font-family: ${({ theme }) => theme.fontBold};
  width: 328px;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.slightGrey};
  box-sizing: ${({ theme }) => theme.boxSizingBorderBox};
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  display: ${({ theme }) => theme.displayTypeFlex};
  justify-content: ${({ theme }) => theme.contentSpaceBetween};
  align-items: ${({ theme }) => theme.alignItemCenter};
  padding: 15px 20px;
  opacity: 0.5;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  &.active {
    border: none;
    box-shadow: 0px 10px 20px 0px
      ${({ theme }) => theme.secondaryBlackTransLight};
    opacity: 1;
  }
`;
export const Lable = styled.div`
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.primaryBlueLight};
`;

export const ColerContainer = styled.div``;

export const ColorCover = styled.span<{
  color: string;
}>`
  background: ${({ color }) => color};
  border: 1px solid rgba(35, 57, 72, 0.05);
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  width: 35px;
  height: 35px;
  display: block;
`;
export const Overlay = styled.div`
  width: ${({ theme }) => theme.widthFull};
  height: ${({ theme }) => theme.heightFull};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ColorCardStyles = createGlobalStyle`

.sketch-picker {
  position: absolute;
  top: 385px;
  left: 427px;
  width: 345px !important;
  height: fit-content !important;
  padding-bottom: 20px !important;
  background: ${({ theme }) => theme.primaryWhite} !important;
  box-shadow: 5px 5px 15px rgb(0 0 0 / 10%) !important;
  border-radius: 10px !important;
}

.sketch-picker .flexbox-fix {
  margin-top: 12px;
}

.sketch-picker .flexbox-fix div {
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
}

.sketch-picker .flexbox-fix:nth-child(3) div div{
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
}

.sketch-picker .flexbox-fix:last-child{
  display: none !important;
}
.sketch-picker .flexbox-fix:nth-child(2) div:last-child{
  border-radius: ${({ theme }) => theme.borderRadiusLarge} !important;
}

.sketch-picker label {
  padding-top: 12px !important;
  font-weight: ${({ theme }) => theme.weightMedium} !important;
  font-size: ${({ theme }) => theme.fontSizeSmall} !important;
  line-height: 14px !important;
  text-align: center !important;
  color: ${({ theme }) => theme.secondaryFontDark} !important;
  opacity: 0.5 !important;
}

.sketch-picker .flexbox-fix input {
width: fit-content;
font-weight: ${({ theme }) => theme.fontWeightNormal};
font-size: ${({ theme }) => theme.fontSizeMedium} !important;
line-height: 16px;
text-align: center;
outline: none;
height: 38px;
background: rgba(12, 63, 98, 0.05);
border: 1px solid rgba(35, 57, 72, 0.05);
box-sizing: border-box;
border-radius: ${({ theme }) => theme.borderRadiusLarge};
color: ${({ theme }) => theme.darkBrown};
}

.sketch-picker .flexbox-fix:nth-child(2) > div:last-child > div {
  width: 35px;
  height: 35px;
  margin-top: -7px;
}
.sketch-picker .flexbox-fix:nth-child(2) > div:first-child {
  width: 50% !important;
}
.sketch-picker .flexbox-fix:nth-child(2) > div:first-child {
  overflow: hidden !important;
  flex: 0 0 87% !important;
  margin-right: 2%;
}
.sketch-picker > div:first-child {
  height: 135px;
  padding: 0 !important;
}
.sketch-picker > div:first-child div {
  height: 135px;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
}

`;
