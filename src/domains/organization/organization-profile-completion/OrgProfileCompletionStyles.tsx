import styled from 'styled-components';

export const ButtonContainer = styled.div`
  margin-left: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primaryWhite};
  min-height: 100%;
  width: 100%;
`;

export const FiltersContainer = styled.div`
  margin-top: 26px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 20px;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 0;
    row-gap: 15px;
  }
`;

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
