import styled from 'styled-components';

interface IFormGroup {
  align?: 'center' | 'flex-start' | 'flex-end';
}

export const Container = styled.form``;

export const FormHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
  margin: 35px auto 0;
  max-width: 300px;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-top: 30px;
  }

  @media (max-width: ${(props) => props.theme.widthMobile}) {
    max-width: none;
  }
`;

export const FormGroup = styled.div<IFormGroup>`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align && align};

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-bottom: 20px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 25px;
`;
