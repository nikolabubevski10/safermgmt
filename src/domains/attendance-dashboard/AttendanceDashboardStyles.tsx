import styled from 'styled-components';

export const Container = styled.div``;

export const TopContainer = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  justify-content: ${({ theme }) => theme.contentSpaceBetween};
  align-items: ${({ theme }) => theme.alignItemCenter};
`;

export const ViewContainer = styled.div`
  margin-top: 30px;
`;
