import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  background-color: ${({ theme }) => theme.secondaryGreenLight};
  border-radius: ${({ theme }) => theme.borderRadiusXL};
  padding: 12px;
`;

export const Text = styled.div`
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.secondaryGreenDark};
  font-size: 14px;
  line-height: 14px;
  margin-left: 10px;
`;
