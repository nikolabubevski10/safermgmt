import React from 'react';
import { Trans } from 'react-i18next';
import {
  Column,
  HeaderGroup,
  useFilters,
  useSortBy,
  useTable,
} from 'react-table';
import Spinner from '../../../components/spinner/Spinner';

import Arrow from './icons/arrow/Arrow';
import {
  ArrowContainer,
  Table,
  TableBody,
  TableContainer,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  TableWrap,
  SpinnerContainer,
} from './BusAttendanceTableStyles';

export interface Props {
  columns: Column[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  defaultSortBy: string;
  isLoading: boolean;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onRowClick: (row: any) => void;
}

const BusAttendanceTable: React.FC<Props> = ({
  columns,
  data,
  defaultSortBy,
  isLoading,
  onRowClick,
}: Props) => {
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable(
    {
      columns,
      data,
      disableSortRemove: true,
      initialState: {
        sortBy: [
          {
            id: defaultSortBy,
            desc: true,
          },
        ],
      },
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
    <>
      {isLoading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <TableContainer>
          <TableWrap>
            <Table {...getTableProps()}>
              <TableHead>
                {headerGroups.map((headerGroup, index) => (
                  <TableRow
                    {...headerGroup.getHeaderGroupProps()}
                    key={index}
                    length={columns.length}
                  >
                    {headerGroup.headers.map((column, index) => (
                      <TableHeader
                        {...column.getHeaderProps(
                          column.getSortByToggleProps({ title: undefined }),
                        )}
                        canSort={column.canSort}
                        key={index}
                        onClick={() => handleTableHeaderClick(column)}
                      >
                        <Trans>{column.render('Header')}</Trans>

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
                {rows.map((row, index) => {
                  prepareRow(row);
                  return (
                    <TableRow
                      onClick={() => onRowClick(row.original)}
                      {...row.getRowProps()}
                      key={index}
                      length={columns.length}
                    >
                      {row.cells.map((cell, index) => {
                        return (
                          <TableData {...cell.getCellProps()} key={index}>
                            <Trans>{cell.render('Cell')}</Trans>
                          </TableData>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableWrap>
        </TableContainer>
      )}
    </>
  );
};

export default BusAttendanceTable;
