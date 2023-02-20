import { SpinnerContainer } from 'domains/organization/organization-users/components/UsersTable/UsersTableStyles';
import { IUserAccount } from 'domains/organization/organization-users/types';
import React, { useMemo } from 'react';
import {
  Column,
  HeaderGroup,
  useFilters,
  useSortBy,
  useTable,
} from 'react-table';
import Spinner from '../spinner/Spinner';
import Arrow from './components/icons/arrow/Arrow';
import {
  ArrowContainer,
  Container,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from './OrganizationTableStyles';

type SupportedData = IUserAccount;

interface IEmployeesTable {
  value: string;
  toggleEdit: (id: string) => void;
  onUserDelete: (id: string) => void;
  Data: Array<SupportedData>;
  isLoading: boolean;
  Columns: Column[];
}

const EmployeesTable = ({
  Data,
  value,
  toggleEdit,
  onUserDelete,
  Columns,
  isLoading,
}: IEmployeesTable): JSX.Element => {
  const columns = useMemo<Column[]>(() => Columns, []);
  const employeesData = useMemo(() => {
    const remmapedData = Data.map((item) => ({
      ...item,
      fullName: `${item.name.first} ${item.name.last}`,
    }));
    if (!value.length) {
      return remmapedData;
    } else {
      return remmapedData.filter((user: SupportedData) =>
        user?.name.first
          ?.toLocaleLowerCase()
          .includes(value.toLocaleLowerCase()),
      );
    }
  }, [Data, value]);
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable(
    {
      columns,
      data: employeesData,
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
    <Container shouldShow={true}>
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
        {isLoading ? (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        ) : (
          <TableBody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <TableRow
                  {...row.getRowProps()}
                  key={i}
                  length={columns.length}
                >
                  {row.cells.map((cell, i) => (
                    <TableData {...cell.getCellProps()} key={i}>
                      {cell.render('Cell', {
                        onUserDelete,
                        toggleEdit,
                        id: row.values.id,
                      })}
                    </TableData>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        )}
      </Table>
    </Container>
  );
};

export default EmployeesTable;
