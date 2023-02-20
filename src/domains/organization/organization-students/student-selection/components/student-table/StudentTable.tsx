import React, { useEffect, useMemo } from 'react';
import {
  ArrowContainer,
  Container,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from './StudentTableStyles';
import COLUMNS from './assets/columns';
import {
  Column,
  HeaderGroup,
  useSortBy,
  useTable,
  useGlobalFilter,
} from 'react-table';
import { useAppSelector } from '../../../../../../state/hooks';
import Arrow from './components/arrow/Arrow';
import SearchBar from './components/search-bar/SearchBar';
import formatName from './utils/formatName';

const SurveyReportsTable: React.FC = () => {
  const { students, searchText } = useAppSelector(
    ({ orgStudents }) => orgStudents,
  );

  const data = useMemo(() => {
    return students.map((student) => ({
      fullName: formatName(student),
      id: student.id,
    }));
  }, [students]);
  const columns = useMemo<Column[]>(() => COLUMNS, []);

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
  );

  const handleTableHeaderClick = (column: HeaderGroup) => {
    if (column.canSort) {
      return column.toggleSortBy(!column.isSortedDesc);
    }
  };

  useEffect(() => {
    setGlobalFilter(searchText);
  }, [data]);

  return (
    <Container>
      <SearchBar setFilter={setGlobalFilter} />
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
