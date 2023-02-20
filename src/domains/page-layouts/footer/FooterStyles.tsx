import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Container = styled.footer`
  padding: 20px 0;
  width: 100%;
  background-color: ${(props) => props.theme.primaryBlueDark};
`;

export const ContentContainer = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 45px;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    padding: 0 30px;
  }

  @media (max-width: ${(props) => props.theme.widthMobile}) {
    padding: 0 15px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 40px;
  row-gap: 20px;
`;

export const NavLink = styled(Link)`
  font-size: ${(props) => props.theme.fontSizeSmall};
  color: ${(props) => props.theme.primaryWhite};
  text-decoration: none;
`;

export const Copyright = styled.p`
  margin-top: 13px;
  font-size: 12px;
  color: ${(props) => props.theme.primaryWhite};
`;
