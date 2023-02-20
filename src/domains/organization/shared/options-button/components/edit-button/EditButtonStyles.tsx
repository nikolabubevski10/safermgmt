import styled from 'styled-components';

export const Svg = styled.svg`
  width: 14px;
  height: 13px;
  fill: inherit;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  fill: ${({ theme }) => theme.secondaryGrayDark};
  color: ${({ theme }) => theme.secondaryGrayDark};
  :hover {
    fill: ${({ theme }) => theme.secondaryBlack};
    color: ${({ theme }) => theme.secondaryBlack};
  }
`;

export const Text = styled.div`
  margin-left: 6px;
  font-family: ${({ theme }) => theme.font};
  font-size: 13px;
  line-height: 18px;
  font-weight: ${({ theme }) => theme.weightMedium};
  color: inherit;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
