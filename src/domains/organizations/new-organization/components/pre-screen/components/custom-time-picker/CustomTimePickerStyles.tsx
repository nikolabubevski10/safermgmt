import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
    display: flex
    flex-direction: column;
    margin: 22px;
`;

export const Label = styled.div`
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.secondaryGrayDark};
  font-weight: ${({ theme }) => theme.weightSemibold};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  line-height: 16px;
  margin-bottom: 10px;
`;

export const InputContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin-left: -25px;
  }
`;
export const TimePickerHeader = styled.div`
width: 128px !important;
height: 47px;
display: flex;
align-items: center;
justify-content: space-around;
padding: 10px;
font-weight: ${({ theme }) => theme.weightSemibold};
font-size: ${({ theme }) => theme.fontSizeMedium};
line-height: 17px;
color: ${({ theme }) => theme.darkBrown};
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.05);
}
`;
export const HeadTitle = styled.span``;

export const TimePickerStyles = createGlobalStyle`


.rc-time-picker {
  width: 300px;
}
.rc-time-picker input{
  width: 100%;
  height: 49px;
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.secondaryFontDark};
  font-weight: ${({ theme }) => theme.weightRegular};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  line-height: 19px;
  padding: 15px;
  resize: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.secondaryGrayLight};
  border: 1px solid ${({ theme }) => theme.secondaryGrayMedium};
  outline: none;
  cursor: pointer;
}

.rc-time-picker .rc-time-picker-panel-combobox {
  max-width: 128px !important;
  width: 128px !important;
  height: 258px !important;
  background: ${({ theme }) => theme.primaryWhite};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
}

.rc-time-picker-panel-select {
  max-height: 258px !important;
  width: 50%;
  padding-bottom: 10px;
  height: ${({ theme }) => theme.heightFull} !important;
  font-family: ${({ theme }) => theme.fontNormal};
font-style: ${({ theme }) => theme.fontStyleNormal};
font-weight: normal;
font-size: ${({ theme }) => theme.fontSizeMedium};
line-height: 15px;
text-align: center;
color: ${({ theme }) => theme.secondaryFontDark};
border: none;
}

.rc-time-picker-panel-inner {
  background: ${({ theme }) => theme.primaryWhite};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  border: none;
  display: flex;
  width: 128px;
  flex-direction: column-reverse;
}

.rc-time-picker-panel-select-option-selected {
  font-weight: bold;
  background: ${({ theme }) => theme.primaryBlueLight} !important;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  color: ${({ theme }) => theme.primaryWhite};
}

.rc-time-picker-panel-select li:hover {
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  background: ${({ theme }) => theme.slightGrey};
}
.rc-time-picker-panel-select ul li {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
}


.rc-time-picker-panel-select ul {
  list-style: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.rc-time-picker-panel-input-wrap {
  border-bottom: none;
}
.rc-time-picker-panel-select {
  border-bottom: none;
}
.rc-time-picker-panel-input-wrap input {
  display: none;
}
.rc-time-picker-clear-icon {
  display: none;
}
`;
