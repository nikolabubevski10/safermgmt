import React, { useMemo } from 'react';
import {
  ArrowContainer,
  Container,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from './MostAbsencesStyles';
import COLUMNS from './assets/columns';
import {
  Column,
  HeaderGroup,
  useFilters,
  useSortBy,
  useTable,
} from 'react-table';
import Arrow from './components/icons/arrow/Arrow';
import { TStudentsData } from '../../state/types';

interface Props {
  studentsData: TStudentsData;
}

const SurveyReportsTable: React.FC<Props> = ({ studentsData }: Props) => {
  const columns = useMemo<Column[]>(() => COLUMNS, []);

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable(
    {
      columns,
      data: studentsData,
    },
    useFilters,
    useSortBy,
  );

  const handleTableHeaderClick = (column: HeaderGroup) => {
    if (column.canSort) {
      return column.toggleSortBy(!column.isSortedDesc);
    }
  };

  return (
    <Container>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup, i) => (
            <TableRow
              {...headerGroup.getHeaderGroupProps()}
              key={i}
              length={columns.length}
            >
              {headerGroup.headers.map((column, i) => (
                <TableHeader
                  {...column.getHeaderProps()}
                  key={i}
                  canSort={column.canSort}
                  canFilter={column.canFilter}
                  onClick={() => handleTableHeaderClick(column)}
                >
                  {column.render('Header')}
                  {column.canSort && (
                    <ArrowContainer>
                      <Arrow
                        isSorted={column.isSorted}
                        isSortedDesc={column.isSortedDesc || false}
                      />
                    </ArrowContainer>
                  )}
                </TableHeader>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()} key={i} length={columns.length}>
                {row.cells.map((cell, i) => (
                  <TableData {...cell.getCellProps()} key={i}>
                    {cell.render('Cell')}
                  </TableData>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
};

export default SurveyReportsTable;
