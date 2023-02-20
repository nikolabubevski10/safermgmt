import styled from 'styled-components';

export const Container = styled.div`
  height: 26px;
  min-height: 26px;
  min-width: 6px;
  width: 6px;
  cursor: pointer;
  margin-left: 25px;
  fill: ${({ theme }) => theme.secondaryGrayMedium};
  :hover {
    fill: ${({ theme }) => theme.secondaryGrayDark};
  }
`;

export const Svg = styled.svg<{
  isHovering: boolean;
}>`
  width: 100%;
  height: 100%;
  fill: inherit;
`;

export const OuterOptionsBox = styled.div<{
  isHovering: boolean;
}>`
  z-index: 2;
  display: none;
  ${({ isHovering }) =>
    isHovering &&
    `
        display: flex;
    `}
  padding-top: 32px;
  position: relative;
  min-width: 92px;
  top: -32px;
  right: 84px;
  flex-direction: column;
  justify-content: flex-end;
`;

export const InnerOptionsBox = styled.div`
  z-index: 1;
  flex: 1;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadiusXL};
  background-color: ${({ theme }) => theme.primaryWhite};
  box-shadow: 6px 6px 10px ${({ theme }) => theme.secondaryGrayMedium};
  padding: 10px;
`;
