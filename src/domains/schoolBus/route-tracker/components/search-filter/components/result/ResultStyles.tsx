import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  font-size: 13px;
  color: ${({ theme }) => theme.secondaryGrayDark};
  padding: 7px 0px 7px 0px;
  font-weight: 500;
  :hover {
    color: ${({ theme }) => theme.secondaryBlack};
  }
`;

export const HighlightStyles = createGlobalStyle`
    .generator-result-highlight {
        background-color: transparent;
        font-weight: 700;
    }
`;
