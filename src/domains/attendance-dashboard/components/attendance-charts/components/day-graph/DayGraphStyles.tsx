import styled from 'styled-components';

export const Container = styled.div`
  border-radius: ${({ theme }) => theme.borderRadiusXXXL};
  box-shadow: 0px 0px 30px 0px ${({ theme }) => theme.secondaryGrayDark}80};
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  margin-top: 30px;

  @media (min-width: ${({ theme }) => theme.sizeRanges.desktop.min}px) {
      width: 33.333%;
      margin-top: 0px;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.primaryBlueLight};
  font-family: ${({ theme }) => theme.fontBold};
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  line-height: 1;
`;
