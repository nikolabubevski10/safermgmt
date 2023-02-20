import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import {
  Column,
  HeaderGroup,
  useFilters,
  useSortBy,
  useTable,
} from 'react-table';

import Arrow from './icons/arrow/Arrow';
import {
  ArrowContainer,
  Overlay,
  Table,
  TableBody,
  TableContainer,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  TableWrap,
} from './TableStyles';

export interface Props {
  columns: Column[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  defaultSortBy: string;
  shouldShowCompletedRoutes: boolean;
  shouldShowEmergencies: boolean;
}

const TableComponent: React.FC<Props> = ({
  columns,
  data,
  defaultSortBy,
  shouldShowCompletedRoutes,
  shouldShowEmergencies,
}: Props) => {
  const [isFilterActive, setIsFilterActive] = useState(false);

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

  useEffect(() => {
    if (shouldShowCompletedRoutes && shouldShowEmergencies) {
      setFilter('status', null);
    } else if (shouldShowCompletedRoutes) {
      setFilter('status', true);
    } else if (shouldShowEmergencies) {
      setFilter('status', false);
    } else {
      setFilter(
        'status',
        'Status is a boolean, so here is some text to hide all data',
      );
    }
  }, [shouldShowCompletedRoutes, shouldShowEmergencies]);

  const handleTableHeaderClick = (column: HeaderGroup) => {
    if (column.canSort) {
      return column.toggleSortBy(!column.isSortedDesc);
    }
  };

  return (
    <>
      {isFilterActive && <Overlay onClick={() => setIsFilterActive(false)} />}

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
    </>
  );
};

export default TableComponent;
