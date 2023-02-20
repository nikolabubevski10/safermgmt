import styled from 'styled-components';

export const CircleImg = styled.img`
  height: 285px;
  width: 285px;
  z-index: 3;
  margin-top: 30px;
  position: auto;
  top: auto;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min + 50}px) {
    position: absolute;
    top: calc(100% - 315px);
  }
`;

export const DotGroupContainer = styled.div`
  @media (max-width: ${(props) => props.theme.widthTablet}) {
    display: none;
  }
`;
