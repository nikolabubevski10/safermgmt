import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  margin-bottom: 8px;
  text-decoration: none;
  user-select: none;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.secondaryYellowMedium};
  font-weight: ${({ theme }) => theme.weightBold};
`;
