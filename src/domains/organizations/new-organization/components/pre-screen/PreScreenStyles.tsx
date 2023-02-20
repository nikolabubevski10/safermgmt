import styled from 'styled-components';

export const Container = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const CheckContainer = styled.div`
  padding-left: 22px;
  margin-top: 10px;
  margin-top: 30px;
`;
export const CardWrapper = styled.div``;

export const CardRow = styled.div`
  display: flex;
  align-items: center;
`;
export const FormData = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 39.5rem;
`;
export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
