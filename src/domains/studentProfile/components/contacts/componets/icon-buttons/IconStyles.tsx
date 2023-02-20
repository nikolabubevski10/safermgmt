import styled from 'styled-components';

export const Container = styled.div``;

export const Cover = styled.div`
  width: 39px;
  height: 39px;
  background: ${({ theme }) => theme.primaryWhite};
  box-shadow: 5px 5px 15px rgb(0 0 0 / 10%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :first-child {
    margin-right: 15px;
  }
`;
