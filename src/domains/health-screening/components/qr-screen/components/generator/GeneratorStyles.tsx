import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BigText = styled.div`
  color: ${({ theme }) => theme.primaryBlueDark};
  font-family: ${({ theme }) => theme.fontBold};
  font-size: 40px;
  line-height: 40px;
  margin-top: 25px;
  text-align: center;
`;

export const SmallText = styled.p`
  margin-top: 10px;
`;
