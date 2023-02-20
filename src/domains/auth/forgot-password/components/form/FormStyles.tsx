import styled from 'styled-components';

export const ButtonContainer = styled.div`
  margin-top: 25px;
`;

export const Container = styled.form``;

export const FormHeaderContainer = styled.div``;

export const FormHeaderParagraphContainer = styled.div`
  margin-top: 10px;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-top: 15px;
  }
`;

export const NotificationContainer = styled.div`
  margin-top: 35px;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-top: 30px;
  }
`;

export const FormGroups = styled.div`
  margin-top: 35px;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-top: 30px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-bottom: 20px;
  }
`;

export const FormLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
