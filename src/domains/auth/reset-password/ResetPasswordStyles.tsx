import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  margin-top: 45px;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-top: 40px;
    max-width: none;
  }

  @media (max-width: ${(props) => props.theme.widthMobile}) {
    margin-top: 30px;
    max-width: none;
  }
`;
