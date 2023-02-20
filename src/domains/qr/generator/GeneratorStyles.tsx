import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CardContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    flex-direction: row;
  }
`;

export const HighlightStyles = createGlobalStyle`
    .generator-result-highlight {
        background-color: transparent;
        font-weight: ${({ theme }) => theme.weightBold};
    }
    .generator-highlighter-wrapper {
      cursor: pointer;
      font-size: 13px;
      color: ${({ theme }) => theme.secondaryGrayDark};
      font-weight: ${({ theme }) => theme.weightRegular};
      padding: 7px 0px 7px 0px;
      :hover {
        color: ${({ theme }) => theme.secondaryBlack};
      }
    }
`;
