import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Name = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.secondaryBlack};
`;
