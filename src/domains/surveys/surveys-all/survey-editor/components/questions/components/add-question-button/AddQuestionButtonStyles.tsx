import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const Svg = styled.svg`
  width: 14px;
  height: 14px;
  fill: ${({ theme }) => theme.secondaryYellowMedium};
`;

export const Text = styled.div`
  margin-left: 10px;
  color: ${({ theme }) => theme.secondaryYellowMedium};
  font-family: ${({ theme }) => theme.font};
  font-weight: ${({ theme }) => theme.weightBold};
  font-size: 18px;
  line-height: 18px;
  text-decoration: inherit;
`;
