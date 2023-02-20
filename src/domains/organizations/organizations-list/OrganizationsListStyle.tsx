import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div``;

export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  min-height: 52px;
`;

export const StyledLink = styled(Link)`
  margin-left: auto;
  text-decoration: none;
`;

export const MainActionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer;

  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.secondaryBlueDark};

  width: 192px;
  height: 52px;
  min-width: 192px;
  min-height: 52px;
  background: linear-gradient(
      224.33deg,
      rgba(0, 0, 0, 0.2) 5.75%,
      rgba(255, 255, 255, 2e-5) 71.65%
    ),
    #fdd119;
  background-blend-mode: overlay, normal;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};

  box-shadow: 0px 10px 20px 0px
    ${({ theme }) => theme.secondaryYellowLightTrans};

  :hover {
    background: ${({ theme }) => theme.secondaryYellowLight};
  }
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.secondaryGrayMedium};
  background-color: ${({ theme }) => theme.secondaryGrayLight};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  padding: ${({ theme }) => theme.inputPadding};
  padding-left: 2.5rem;
  font-size: 1.125rem;
  outline: none;
  width: 328px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;
