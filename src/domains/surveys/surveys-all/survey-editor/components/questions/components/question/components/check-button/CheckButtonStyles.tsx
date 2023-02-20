import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  border-left: 1px solid ${({ theme }) => theme.secondaryGrayMedium};
  min-height: 24px;
`;

export const Text = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-size: 13px;
  line-height: 13px;
  font-weight: ${({ theme }) => theme.weightMedium};
  margin-left: 9px;
`;

export const Svg = styled.svg`
  height: 13px;
  width: 18px;
  fill: ${({ theme }) => theme.secondaryBlack};
`;
