import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
`;

export const CardContainer = styled.div`
  margin-top: 24px;
  display: ${({ theme }) => theme.displayTypeFlex};
  justify-content: ${({ theme }) => theme.contentSpaceBetween};
  align-items: ${({ theme }) => theme.alignItemCenter};
  margin-bottom: 30px;
  flex-wrap: wrap;
`;
