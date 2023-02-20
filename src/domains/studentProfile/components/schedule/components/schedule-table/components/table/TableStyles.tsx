import styled from 'styled-components';

interface ITableHeader {
  canFilter: boolean;
  canSort: boolean;
}

interface ITableRow {
  length: number;
}

export const ArrowContainer = styled.span`
  margin-left: 5px;
`;

export const FilterContainer = styled.span`
  display: flex;
  margin-left: 6px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableBody = styled.tbody`
  font-family: ${({ theme }) => theme.fontNormal};
  font-style: normal;
`;

export const TableContainer = styled.div`
  display: block;
  flex: 1;
  max-width: 100%;
`;

export const TableData = styled.td`
  color: ${({ theme }) => theme.secondaryFontDark};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightRegular};
  line-height: ${({ theme }) => theme.lineHeightSmall};
  padding: 18px 0;
  &:nth-of-type(5) {
    justify-self: center;
  }

  &:nth-of-type(6) {
    justify-self: end;
  }
`;

export const TableHead = styled.thead`
  border-bottom: ${({ theme }) => `1px solid ${theme.secondaryFontDark}1A`};
  color: ${({ theme }) => theme.secondaryFontDarkTrans};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightSemibold};
  line-height: ${({ theme }) => theme.lineHeightSmall};
`;

export const TableHeader = styled.th<ITableHeader>`
  align-items: center;
  color: ${({ theme }) => theme.secondaryFontDarkTrans};
  cursor: ${({ canFilter, canSort }) => {
    const isPointer = canFilter || canSort;
    return isPointer && 'pointer';
  }};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightSemibold};
  line-height: ${({ theme }) => theme.lineHeightSmall};
  padding: 20px 0;
  position: relative;
  user-select: none;

  &:nth-of-type(6) {
    justify-self: end;
  }
`;

export const TableRow = styled.tr<ITableRow>`
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.secondaryFontDark}1A`};
  column-gap: 70px;
  display: grid;
  grid-template-columns:
    minmax(168px, 0.33fr) minmax(4px, 0.1fr) minmax(0px, 0.1fr)
    minmax(0px, 0.12fr) minmax(196px, 0.1fr);
  justify-items: start;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const TableWrap = styled.div`
  display: block;
  height: 480px;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: auto;
`;
