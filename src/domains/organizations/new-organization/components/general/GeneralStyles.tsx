import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
`;

export const FormData = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 39.5rem;
`;

export const InputTitle = styled.div`
  font-family: ${({ theme }) => theme.fontNormal};
  font-weight: ${({ theme }) => theme.weightSemibold};
  color: ${({ theme }) => theme.secondaryFontDark};
  opacity: 0.5;
  margin-bottom: 0.625rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const ErrorMsg = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-family: ${({ theme }) => theme.fontNormal};
  color: ${({ theme }) => theme.secondaryRed};
`;

export const CheckContainer = styled.div`
  display: flex;
  padding-left: 22px;
  margin-top: 10px;
`;
export const CardWrapper = styled.div``;
