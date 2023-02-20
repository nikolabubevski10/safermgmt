import styled from 'styled-components';

export const Container = styled.button`
  padding: 15px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  font-weight: ${({ theme }) => theme.weightBold};
  background: ${({ theme }) => `linear-gradient(
      224.33deg,
      rgba(0, 0, 0, 0.2) 5.75%,
      rgba(255, 255, 255, 2e-5) 71.65%
    ),
    ${theme.primaryYellow}`};
  background-blend-mode: overlay, normal;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  box-shadow: 0px 10px 20px 0px
    ${({ theme }) => theme.secondaryYellowLightTrans};

  &:hover {
    background: ${({ theme }) => theme.secondaryYellowLight};
  }

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    /* width: 100%; */
  }
`;
