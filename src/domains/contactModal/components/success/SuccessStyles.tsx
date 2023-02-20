import styled from 'styled-components';

export const ButtonContainer = styled.div`
  margin-bottom: 46px;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-bottom: 0;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 70px;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-bottom: 0;
  }
`;

export const Heading = styled.h1`
  text-align: center;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-top: 20px;
    font-size: 35px;
    line-height: 43.68px;
  }
`;

export const Subheading = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: ${({ theme }) => theme.weightMedium};
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.primaryBlueDark};
  margin-top: 10px;
  text-align: center;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-top: 15px;
    font-size: 23px;
    line-height: 34px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;

  h1 {
    margin-top: 25px;
  }

  ${Subheading} {
    margin-bottom: 40px;
    max-width: 315px;
  }
`;
