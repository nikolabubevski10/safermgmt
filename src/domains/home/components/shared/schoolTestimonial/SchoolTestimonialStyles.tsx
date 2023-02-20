import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    margin-right: 40px;
    :last-child {
      margin-right: 0px;
    }
  }
`;

export const StyledImg = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;

export const TestimonialText = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.secondaryFontDarkTrans};
  font-weight: ${({ theme }) => theme.weightSemibold};
`;

export const SubTestimonialText = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.secondaryFontDarkTrans};
  font-weight: ${({ theme }) => theme.weightSemibold};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
