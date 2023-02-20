import styled from 'styled-components';

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fontNormal};
  font-style: ${({ theme }) => theme.fontStyleNormal};
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div`
  margin-right: 20px;
`;
