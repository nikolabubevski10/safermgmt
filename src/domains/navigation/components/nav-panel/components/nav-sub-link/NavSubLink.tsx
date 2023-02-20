import React from 'react';
import { Container, StyledLink } from './NavSubLinkStyles';
import { useLocation } from 'react-router-dom';

interface Props {
  children: JSX.Element | string;
  to: string;
}

const NavSubLink: React.FC<Props> = ({ children, to }: Props) => {
  const location = useLocation();

  const isSelected = to === location.pathname;
  return (
    <Container isSelected={isSelected}>
      <StyledLink to={to}>{children}</StyledLink>
    </Container>
  );
};

export default NavSubLink;
