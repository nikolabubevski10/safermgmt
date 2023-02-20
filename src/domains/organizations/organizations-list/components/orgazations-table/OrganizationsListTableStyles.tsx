import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    align-items: flex-end;
  }
`;

export const Heading = styled.h2``;

export const TableContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 10px;
  width: 100%;
`;
export const ButtonContainer = styled.div`
  margin-left: 20px;
`;
