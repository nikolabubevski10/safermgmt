import styled from 'styled-components';

export const Frame = styled.div`
  position: relative;
  width: 100%;
`;

export const FormContainer = styled.div`
  margin-top: 40px;
  max-width: 300px;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-top: 20px;
    max-width: none;
  }

  @media (max-width: ${(props) => props.theme.widthMobile}) {
    margin-top: 10px;
    max-width: none;
  }
`;
