import NameCell from '../components/name-cell/NameCell';

export default [
  {
    Header: 'Name',
    accessor: 'fullName',
    disableFilters: true,
    Cell: NameCell,
  },
  {
    Header: 'Student ID',
    accessor: 'id',
    disableFilters: true,
  },
];
