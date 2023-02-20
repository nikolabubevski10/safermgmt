import React, { useState, useEffect } from 'react';
import { Container, ButtonsGroup, Header } from './BusAttendanceStyles';
import Button from './components/Button/Button';
import StudentCart from './components/StudentCart/StudentCart';
import SearchDropDown from './components/search-filter/SearchDropDown';
import { IBusAttendance } from './types';

import DatePicker from '../components/date-picker/DatePicker';
import {
  handleDateRangeChange,
  loadBusAttendances,
} from './state/BusAttendanceActions';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import BusAttendanceTable from './components/table/BusAttendanceTable';
import { useMemo } from 'react';
import { Column } from 'react-table';
import { TableContainer } from './components/table/BusAttendanceTableStyles';

const BusAttendance: React.FC = () => {
  const dispatch = useAppDispatch();
  const [currentAttendanceId, setCurrentAttendanceId] = useState<string>('');
  const {
    startDate,
    endDate,
    list: busAttendanceData,
    isLoading,
  } = useAppSelector(({ busAttendance }) => busAttendance);

  useEffect(() => {
    dispatch(
      loadBusAttendances({
        startDate,
        endDate,
        organizationId: 'dbd3a030-e859-44d2-8e88-9050d6b1726c',
      }),
    );
  }, [startDate, endDate]);

  const onDateChange = (newDates: { startDate: Date; endDate: Date }) => {
    setCurrentAttendanceId('');
    dispatch(handleDateRangeChange(newDates));
  };

  const currentAttendance = busAttendanceData.find(
    (ba: IBusAttendance) => ba.id === currentAttendanceId,
  );

  const columns = useMemo<Column[]>(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        disableSortBy: false,
      },
      {
        Header: 'Student ID',
        accessor: 'id',
        disableSortBy: true,
      },
      {
        Header: 'Boarding',
        accessor: 'boarding',
        disableSortBy: false,
      },
      {
        Header: 'Location',
        accessor: 'location',
        disableSortBy: true,
      },
      {
        Header: 'Bus Number',
        accessor: 'busNumber',
        disableSortBy: true,
      },
    ],
    [],
  );

  return (
    <Container>
      <Header>
        <h1>Bus Attendance</h1>
        <ButtonsGroup>
          <Button>Export report</Button>
        </ButtonsGroup>
      </Header>
      <SearchDropDown
        Data={busAttendanceData}
        setCurrentAttendanceId={setCurrentAttendanceId}
      />
      <DatePicker onDateChange={onDateChange} />
      {currentAttendanceId && (
        <StudentCart
          name={currentAttendance?.name}
          id={currentAttendance?.id}
        />
      )}

      <TableContainer>
        <BusAttendanceTable
          isLoading={isLoading}
          columns={columns}
          data={busAttendanceData}
          defaultSortBy={'name'}
          onRowClick={(row) => setCurrentAttendanceId(row.id)}
        />
      </TableContainer>
    </Container>
  );
};

export default BusAttendance;
