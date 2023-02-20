import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div<{
  isSelected: boolean;
}>`
  margin-top: 15px;
  margin-left: 33px;
  color: ${({ theme }) => theme.secondaryGrayDark};
  font-weight: 400;
  position: relative;
  ${({ theme, isSelected }) =>
    isSelected &&
    `
          font-weight: 500;
          color: ${theme.secondaryBlack};
      `}
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  font-family: ${({ theme }) => theme.font};
  font-size: 14px;
  line-height: 17px;
  font-weight: inherit;
  color: inherit;
  text-decoration: none;
`;
