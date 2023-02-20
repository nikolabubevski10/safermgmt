import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.secondaryGrayLight};
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  height: 50px;
  display: flex;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`;

export const SliderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: flex;
  padding: 2px;
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  overflow: hidden;
`;

export const Slider = styled.div<{
  optionCount: number;
  positionIndex: number;
}>`
  flex: ${({ optionCount }) => 1 / optionCount};
  background-color: ${({ theme }) => theme.primaryWhite};
  height: 100%;
  position: relative;
  left: ${({ positionIndex, optionCount }) => {
    if (typeof positionIndex !== 'number') {
      return '200%';
    } else {
      return `${positionIndex * (1 / (optionCount || 1)) * 100}%`;
    }
  }};
  border-radius: 19px;
  transition: left 0.2s ease-in-out;
`;
