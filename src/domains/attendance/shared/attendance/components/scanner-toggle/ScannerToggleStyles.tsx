import styled from 'styled-components';

export const Container = styled.div<{
  small: boolean;
}>`
  z-index: 2;
  margin-top: 25px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 326px;
  height: 66px;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.secondaryGrayLight};

  ${({ small }) =>
    small &&
    `
        height: 51px;
        width: 250px;
    `}
`;

export const Slider = styled.div<{
  position: 0 | 1;
  small: boolean;
}>`
  z-index: 1;
  position: absolute;
  height: 59px;
  width: 161px;
  background-color: ${({ theme }) => theme.primaryWhite};
  border-radius: 20px;
  transition: left ease-in-out 0.1s;

  ${({ position }) =>
    position === 0 &&
    `
        left: 4px;
    `}

  ${({ position, small }) =>
    position === 1 &&
    `
        left: calc(100% - 164px);
        ${
          small &&
          `
            left: calc(100% - 121px);
        `
        }
    `}

    ${({ small }) =>
    small &&
    `
        height: 45px;
        width: 118px;
    `}
`;

export const LabelText = styled.div<{
  isSelected: boolean;
  small: boolean;
}>`
  flex: 1;
  text-align: center;
  z-index: 2;
  font-family: ${({ theme }) => theme.font};
  font-weight: 800;
  font-size: 23px;
  line-height: 28px;
  color: ${({ theme }) => theme.secondaryBlueLight};
  ${({ isSelected, theme }) =>
    isSelected &&
    `
        color: ${theme.primaryBlueLight};
    `}

  ${({ small }) =>
    small &&
    `
    font-size: 16px;
    line-height: 20px;
    `}

    -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
