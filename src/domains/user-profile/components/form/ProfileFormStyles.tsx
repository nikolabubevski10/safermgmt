import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 30px;
  margin-top: 28px;
`;

export const FormGroups = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 60%;
  display: flex;
  justify-content: space-between;
  max-width: 60%;

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

export const Field = styled.div`
  width: 48%;

  input {
    height: 45px;
    background: #fff;
  }
`;
