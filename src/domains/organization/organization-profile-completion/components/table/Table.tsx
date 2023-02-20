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
import More from './icons/more/More';
import {
  ArrowContainer,
  FilterContainer,
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
  shouldShowCompletedProfiles: boolean;
  shouldShowIncompletedProfiles: boolean;
}

const TableComponent: React.FC<Props> = ({
  columns,
  data,
  defaultSortBy,
  shouldShowCompletedProfiles,
  shouldShowIncompletedProfiles,
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
    if (shouldShowCompletedProfiles && shouldShowIncompletedProfiles) {
      setFilter('status', null);
    } else if (shouldShowCompletedProfiles) {
      setFilter('status', true);
    } else if (shouldShowIncompletedProfiles) {
      setFilter('status', false);
    } else {
      setFilter(
        'status',
        'Status is a boolean, so here is some text to hide all data',
      );
    }
  }, [shouldShowCompletedProfiles, shouldShowIncompletedProfiles]);

  const handleTableHeaderClick = (column: HeaderGroup) => {
    if (column.canFilter) {
      return setIsFilterActive((prev) => !prev);
    }

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
                      canFilter={column.canFilter}
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

                      {column.canFilter && (
                        <>
                          <FilterContainer>
                            <More isActive={isFilterActive} />
                          </FilterContainer>

                          {isFilterActive &&
                            column.render('Filter', { setIsFilterActive })}
                        </>
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
