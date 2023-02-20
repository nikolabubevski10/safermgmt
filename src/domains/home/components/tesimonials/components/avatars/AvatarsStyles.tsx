import styled from 'styled-components';

export const AvatarContainer = styled.div`
  position: relative;
  width: 0px;
  height: 0px;
`;

export const Avatar = styled.img`
  position: absolute;
  height: 80px;
  width: 80px;
`;

export const Avatar1 = styled(Avatar)`
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    left: -45vw;
    top: 175px;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobileLarge.min}px) {
    left: -35vw;
    top: 175px;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    left: -24.1vw;
    top: 87px;
  }
`;

export const Avatar2 = styled(Avatar)`
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    left: -50vw;
    top: 71px;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobileLarge.min}px) {
    left: -38vw;
    top: 71px;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    left: -43.1vw;
    top: 150px;
  }
`;

export const Avatar3 = styled(Avatar)`
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    left: -23vw;
    top: 1px;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobileLarge.min}px) {
    left: -21vw;
    top: 7px;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    left: -39.1vw;
    top: 320px;
  }
`;

export const Avatar4 = styled(Avatar)`
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    left: 9vw;
    top: 27px;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    left: 24.1vw;
    top: 150px;
  }
`;

export const Avatar5 = styled(Avatar)`
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    left: 23vw;
    top: 100px;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    left: 32.1vw;
    top: 355px;
  }
`;

export const Avatar6 = styled(Avatar)`
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    left: 19vw;
    top: 180px;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    left: 39.1vw;
    top: 87px;
  }
`;
