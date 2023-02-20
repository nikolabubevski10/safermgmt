import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  select {
    display: none;
  }
`;

export const Select = styled.select``;

export const Option = styled.div`
  width: 100px;
  height: 50px;
  border: 1px solid blue;
`;
