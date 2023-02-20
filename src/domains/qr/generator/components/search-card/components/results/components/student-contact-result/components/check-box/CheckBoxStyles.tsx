import styled from 'styled-components';
import convert from 'color-convert';

const getCheckMarkSvgString = (rgbString: string) => {
  return `<svg viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="${rgbString}" d="M10.6876 0.804268C10.3053 0.408357 9.67439 0.397378 9.27847 0.779742C9.27018 0.787742 9.26201 0.795917 9.25395 0.804268L3.96389 6.09439L1.68893 3.81943C1.29302 3.43707 0.662129 3.44804 0.279765 3.84395C-0.0932551 4.23017 -0.0932551 4.84243 0.279765 5.22865L3.25931 8.20819C3.6485 8.59727 4.27933 8.59727 4.66847 8.20819L10.6631 2.21349C11.059 1.83107 11.07 1.20018 10.6876 0.804268Z"/></svg>`;
};

export const Label = styled.label`
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-right: 10px;
  position: relative;
  user-select: none;

  input {
    cursor: pointer;
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;
  }

  :hover input ~ .checkmark {
    background-color: #ccc;
  }

  .result-check-mark {
    background-color: ${({ theme }) => theme.secondaryGrayLight};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
    border: 1px solid ${({ theme }) => theme.primaryBlueLight};
    height: 15px;
    left: 0;
    overflow: hidden;
    position: relative;
    top: 0;
    width: 15px;

    :after {
      content: '';
      position: relative;
      display: none;
    }
  }

  input:checked ~ .result-check-mark:after {
    background-color: ${({ theme }) => theme.primaryBlueLight};
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 10px;
    background-image: url('data:image/svg+xml,${({ theme }) => {
      const c = convert.hex.rgb(theme.primaryWhite);
      const rgbString = `rgb(${c[0]},${c[1]},${c[2]})`;
      const res = getCheckMarkSvgString(rgbString);
      return res;
    }}');
    display: block;
    height: 100%;
    position: relative;
    width: 100%;
  }
`;

export const CheckInput = styled.input.attrs(() => ({
  type: 'checkbox',
}))``;
