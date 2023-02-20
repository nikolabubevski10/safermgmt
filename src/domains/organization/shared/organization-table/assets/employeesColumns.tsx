import React from 'react';
import SelectColumnFilter from '../components/select-column-filter/SelectColumnFilter';
import {
  TableCellName,
  AvatarImg,
  TableCellPermitted,
} from '../OrganizationTableStyles';
import avatar from '../../../organization-users/assets/mockAvatar.jpg';
import Toggle from 'domains/organization/organization-employees/components/Toggle/Toggle';
import OptionsButton from '../../options-button/OptionsButton';
import { Column } from 'react-table';

interface IPermittedProps {
  toggleEdit: (id: string) => void;
  onUserDelete: (id: string) => void;
  id: string;
}

const columns: Column[] = [
  {
    Header: 'Name',
    accessor: 'fullName',
    disableFilters: true,
    // eslint-disable-next-line react/display-name
    Cell: function ({ value }: { value: string }): JSX.Element {
      return (
        <TableCellName>
          <AvatarImg src={avatar} alt="avatar" />
          <span>{value}</span>
        </TableCellName>
      );
    },
  },
  {
    Header: 'Employee ID',
    accessor: 'id',
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: 'Email',
    accessor: 'emailAddress',
    disableSortBy: true,
    Filter: SelectColumnFilter,
    filter: 'includes',
    Cell: function (): string {
      return 'example-email@gmail.com';
    },
  },
  {
    Header: 'Permitted',
    accessor: 'permitted',
    disableSortBy: true,
    disableFilters: true,
    // eslint-disable-next-line react/display-name
    Cell: ({ onUserDelete, toggleEdit, id }: IPermittedProps): JSX.Element => {
      return (
        <TableCellPermitted>
          <Toggle />
          <OptionsButton
            editClick={() => toggleEdit(id || '')}
            deleteClick={() => id && onUserDelete(id)}
          />
        </TableCellPermitted>
      );
    },
  },
];

export default columns;
