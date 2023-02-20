import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 55px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    margin-top: 75px;
  }

  p {
    margin-top: 10px;
    margin-bottom: 50px;
    text-align: center;
    max-width: 493px;
  }
`;

export const Greeting = styled.div`
  font-family: ${({ theme }) => theme.fontBold};
  font-size: 40px;
  line-height: 40px;
  color: ${({ theme }) => theme.primaryBlueDark};
  text-align: center;
  margin-bottom: 50px;
`;
