import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 40px;
`;

export const ToolTipStyles = createGlobalStyle`

.daily-participation-tooltip-container {
  font: ${({ theme }) => theme.font};
  path {
    fill: ${({ theme }) => theme.primaryWhite};
  }
  div {
    padding: 3px;
  }


}
`;
