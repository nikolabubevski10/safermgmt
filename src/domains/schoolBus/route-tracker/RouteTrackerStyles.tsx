import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.875rem;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 335px;
  color: ${({ theme }) => theme.secondaryBlueDark};
  font-family: ${({ theme }) => theme.fontNormal};
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fontNormal};
  font-style: normal;
  font-weight: 900;
  font-size: 2.19rem;
  color: ${({ theme }) => theme.primaryBlueDark};
`;

export const TableContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 10px;
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

export const SpinnerContainer = styled.div`
  margin: 130px 0;
`;
