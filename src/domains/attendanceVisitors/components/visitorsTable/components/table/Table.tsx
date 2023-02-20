import React, { useState } from 'react';
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
  HideCol,
} from './TableStyles';

interface IData {
  photo: JSX.Element;
  name: string;
  signIn: string;
  driverLicense: string;
  personVisiting: string;
  phoneNumber: string;
  signOut: string;
  signature: JSX.Element;
}
export interface Props {
  columns: Column[];
  data: IData[];
  defaultSortBy: string;
}

const TableComponent: React.FC<Props> = ({
  columns,
  data,
  defaultSortBy,
}: Props) => {
  const [isFilterActive, setIsFilterActive] = useState(false);

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
                      {column.Header === 'Signature' ? (
                        <HideCol>{column.render('Header')}</HideCol>
                      ) : (
                        column.render('Header')
                      )}

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
                          {cell.render('Cell')}
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
