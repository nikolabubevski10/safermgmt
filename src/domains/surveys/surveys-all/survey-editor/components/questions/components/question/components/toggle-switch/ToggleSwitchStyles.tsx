import styled from 'styled-components';

const transitionTime = 0.12;

export const Container = styled.div<{
  isOn: boolean;
}>`
  cursor: pointer;
  display: flex;
  width: 56px;
  min-width: 56px;
  min-height: 30px;
  height: 30px;
  border-radius: 9999px;
  position: relative;
  box-sizing: border-box;
  margin-left: auto;
  transition: background-color ${transitionTime}s ease-in-out;
  background-color: ${({ theme }) => theme.secondaryGrayMedium};
  ${({ isOn, theme }) =>
    isOn &&
    `
    background-color: ${theme.primaryBlueLight};
  `}
`;

export const Circle = styled.div<{
  isOn: boolean;
}>`
  border-radius: 13px;
  background-color: ${({ theme }) => theme.primaryWhite};
  width: 26px;
  height: 26px;
  margin: 2px;
  position: absolute;
  left: 0px;
  transition: left ${transitionTime}s ease-in-out;
  ${({ isOn }) =>
    isOn &&
    `
        left: 26px;
    `}
`;
