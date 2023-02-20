import styled from 'styled-components';

export const Svg = styled.svg`
  fill: ${({ theme }) => theme.secondaryBlueLight};
  margin-bottom: 20px;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    margin-top: 0px;
    height: 86px;
    width: 142px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    margin-top: 0px;
    height: 178px;
    width: 294px;
  }
`;
