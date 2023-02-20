import React, { useMemo } from 'react';
import Table from './components/table/Table';
import { Container, TableContainer } from './ScheduleTableStyles';
import { Column } from 'react-table';

const ScheduleTable: React.FC = () => {
  const columns = useMemo<Column[]>(
    () => [
      {
        Header: 'Course',
        accessor: 'course',
        disableFilters: true,
        disableSortBy: true,
      },
      {
        Header: 'Period',
        accessor: 'period',
        disableFilters: true,
        sortInverted: true,
      },
      {
        Header: 'Term',
        accessor: 'term',
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: 'Code',
        accessor: 'code',
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: 'Teacher',
        accessor: 'teacher',
        disableSortBy: true,
        disableFilters: true,
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        course: 'Algebra I',
        period: '01',
        term: 'AY',
        code: '270404',
        teacher: 'Lilly Blackman-Hamilton',
      },
      {
        course: 'Algebra I',
        period: '02',
        term: 'AY',
        code: '270404',
        teacher: 'Lilly Blackman-Hamilton',
      },
      {
        course: 'Algebra I',
        period: '03',
        term: 'AY',
        code: '270404',
        teacher: 'Lilly Blackman-Hamilton',
      },
      {
        course: 'Algebra I',
        period: '04',
        term: 'AY',
        code: '270404',
        teacher: 'Lilly Blackman-Hamilton',
      },
      {
        course: 'Algebra I',
        period: '05',
        term: 'AY',
        code: '270404',
        teacher: 'Lilly Blackman-Hamilton',
      },
      {
        course: 'Algebra I',
        period: '06',
        term: 'AY',
        code: '270404',
        teacher: 'Lilly Blackman-Hamilton',
      },
      {
        course: 'Algebra I',
        period: '07',
        term: 'AY',
        code: '270404',
        teacher: 'Lilly Blackman-Hamilton',
      },
      {
        course: 'Algebra I',
        period: '05',
        term: 'AY',
        code: '270404',
        teacher: 'Lilly Blackman-Hamilton',
      },
      {
        course: 'Algebra I',
        period: '06',
        term: 'AY',
        code: '270404',
        teacher: 'Lilly Blackman-Hamilton',
      },
      {
        course: 'Algebra I',
        period: '07',
        term: 'AY',
        code: '270404',
        teacher: 'Lilly Blackman-Hamilton',
      },
    ],
    [],
  );

  return (
    <Container>
      <TableContainer>
        <Table columns={columns} data={data} defaultSortBy="period" />
      </TableContainer>
    </Container>
  );
};

export default ScheduleTable;
