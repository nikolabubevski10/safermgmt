import { css } from 'styled-components';

export default css`
  h1 {
    margin: 0px;
    font-family: ${({ theme }) => theme.fontBold};
    font-style: normal;
    font-weight: ${({ theme }) => theme.weightFullBold};
    font-size: 50px;
    line-height: 62px;
    color: ${({ theme }) => theme.primaryBlueDark};
  }

  h2 {
    margin: 0px;
    font-family: ${({ theme }) => theme.fontBold};
    font-style: normal;
    font-weight: ${({ theme }) => theme.weightFullBold};
    font-size: 40px;
    line-height: 50px;
    color: ${({ theme }) => theme.primaryBlueDark};

    @media (max-width: ${(props) => props.theme.widthTablet}) {
      font-size: 35px;
      line-height: 44px;
    }
  }

  h3 {
    margin: 0px;
    font-family: ${({ theme }) => theme.fontBold};
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
    line-height: 34px;
    color: ${({ theme }) => theme.secondaryBlueMedium};

    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.tablet.min}px) {
      font-size: 30px;
      line-height: 37px;
    }
  }

  h4 {
    margin: 0px;
    font-family: ${({ theme }) => theme.fontBold};
    font-style: normal;
    font-weight: 800;
    font-size: 23px;
    line-height: 28px;
    color: ${({ theme }) => theme.primaryBlueLight};
  }

  p {
    margin: 0px;
    font-family: ${({ theme }) => theme.font};
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: ${({ theme }) => theme.secondaryFontDark};

    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.mobile.min}px) {
      font-size: 18px;
      line-height: 25px;
    }

    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.tablet.min}px) {
      font-size: 20px;
      line-height: 28px;
    }
  }
`;
