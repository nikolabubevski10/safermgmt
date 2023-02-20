import styled from 'styled-components';

export const Svg = styled.svg<{
  isActive: boolean;
}>`
  fill: ${({ isActive, theme }) =>
    isActive ? theme.primaryBlueLight : theme.secondaryBlueMedium};
  width: 53px;
  height: 50px;
`;
