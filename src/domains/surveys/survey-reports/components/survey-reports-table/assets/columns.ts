import SelectColumnFilter from '../components/select-column-filter/SelectColumnFilter';
import { Row } from 'react-table';

const statusFilter = (
  rows: Row[],
  id: string[],
  filterValue: boolean,
): Row[] => {
  if (filterValue === null) {
    return rows;
  } else if (filterValue === true) {
    return rows.filter((row) => {
      return row.values.isComplete === true;
    });
  } else if (filterValue === false) {
    return rows.filter((row) => {
      return row.values.isComplete === false;
    });
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
    Header: 'user Id',
    accessor: 'userAccountId',
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: 'Roles',
    accessor: 'userRoles',
    disableSortBy: true,
    Filter: SelectColumnFilter,
    filter: 'includes',
    Cell: ({ value }: { value: string[] }): string =>
      value.join(', ') || 'none',
  },
  {
    Header: 'Status',
    accessor: 'isComplete',
    disableSortBy: true,
    disableFilters: true,
    Cell: ({ value }: { value: string }): string =>
      value ? 'complete' : 'incomplete',
    filter: statusFilter,
  },
];
