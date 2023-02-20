import React, { useMemo, useEffect } from 'react';
import {
  ArrowContainer,
  Container,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from './StudentsTableStyles';
import COLUMNS from './assets/columns';
import {
  Column,
  HeaderGroup,
  useFilters,
  useSortBy,
  useTable,
} from 'react-table';
import Arrow from './components/icons/arrow/Arrow';
import { IAttendanceRecord } from '../../state/types';

interface Props {
  attendancesInTimeRange: IAttendanceRecord[];
  isPresentSelected: boolean;
  isAbsentSelected: boolean;
}

const SurveyReportsTable: React.FC<Props> = ({
  attendancesInTimeRange,
  isPresentSelected,
  isAbsentSelected,
}: Props) => {
  const columns = useMemo<Column[]>(() => COLUMNS, []);
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
    setFilter,
  } = useTable(
    {
      columns,
      data: attendancesInTimeRange,
    },
    useFilters,
    useSortBy,
  );

  const handleTableHeaderClick = (column: HeaderGroup) => {
    if (column.canSort) {
      return column.toggleSortBy(!column.isSortedDesc);
    }
  };

  useEffect(() => {
    console.log({ isPresentSelected, isAbsentSelected });
    if (isAbsentSelected && isPresentSelected)
      return setFilter('status', 'all');
    if (isPresentSelected) return setFilter('status', 'present');
    if (isAbsentSelected) return setFilter('status', 'absent');
    return setFilter('status', '');
  }, [isPresentSelected, isAbsentSelected]);

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
