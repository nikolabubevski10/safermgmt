import styled from 'styled-components';

export const Frame = styled.div`
  position: relative;
`;

export const FormContainer = styled.div`
  z-index: 4;
  margin-top: 40px;
  max-width: 400px;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-top: 20px;
    max-width: none;
  }

  @media (max-width: ${(props) => props.theme.widthMobile}) {
    margin-top: 10px;
    max-width: none;
  }
`;
