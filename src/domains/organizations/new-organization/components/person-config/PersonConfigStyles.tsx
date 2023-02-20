import styled from 'styled-components';

export const Container = styled.div``;

export const CheckContainer = styled.div`
  padding-left: 22px;
  margin-top: 10px;
  margin-top: 30px;
`;
export const CardWrapper = styled.div``;

export const CardRow = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
  margin-top: 20px;
`;
export const PersonType = styled.span`
  font-family: ${({ theme }) => theme.fontBold};
  font-style: ${({ theme }) => theme.fontStyleNormal};
  font-weight: ${({ theme }) => theme.weightMedium};
  font-size: ${({ theme }) => theme.fontSizeXXL};
  line-height: 26px;
  color: ${({ theme }) => theme.primaryBlueDark};
`;
