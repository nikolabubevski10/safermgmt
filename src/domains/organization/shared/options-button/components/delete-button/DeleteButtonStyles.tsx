import styled from 'styled-components';

export const Svg = styled.svg`
  width: 11px;
  height: 13px;
  fill: inherit;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  fill: ${({ theme }) => theme.secondaryRedMedium};
  color: ${({ theme }) => theme.secondaryRedMedium};
  :hover {
    fill: ${({ theme }) => theme.secondaryRed};
    color: ${({ theme }) => theme.secondaryRed};
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
