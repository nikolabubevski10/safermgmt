import styled from 'styled-components';

export const Container = styled.div``;

export const TitleHeader = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  justify-content: ${({ theme }) => theme.contentSpaceBetween};
  align-items: ${({ theme }) => theme.alignItemCenter};
`;

export const Wrap = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: center;

  @media (max-width: 1080px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSizeBigH2};
      line-height: 40px;
    }
  }
`;
