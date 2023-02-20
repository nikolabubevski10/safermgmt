import { format } from 'date-fns';
import { Row } from 'react-table';

const statusElaborations = {
  RAE: 'Remote Asynchronous Engaged',
  U: 'Unexcused Absence',
  P: 'Present',
  OCT: 'On Campus Tardy',
};

const statusFilter = (
  rows: Row[],
  id: string[],
  filterValue: 'present' | 'absent' | 'all' | '',
): Row[] => {
  if (filterValue === 'present') {
    return rows.filter((row) => {
      return ['RAE', 'P', 'OCT'].includes(row.values.status);
    });
  } else if (filterValue === 'absent') {
    return rows.filter((row) => {
      return row.values.status === 'U';
    });
  } else if (filterValue === 'all') {
    return rows;
  } else {
    return [];
  }
};

export default [
  {
    Header: 'Name',
    accessor: 'name',
    disableFilters: true,
  },
  {
    Header: 'Grade',
    accessor: 'grade',
    disableFilters: true,
  },
  {
    Header: 'Date',
    accessor: 'eventDate',
    Cell: ({ value }: { value: string }): string => {
      const date = new Date(value);
      return format(date, 'dd MMM yyyy, p');
    },
    disableFilters: true,
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: ({ value }: { value: string }): string => {
      const key = value as keyof typeof statusElaborations;
      return statusElaborations[key];
    },
    disableFilters: false,
    filter: statusFilter,
  },
];
