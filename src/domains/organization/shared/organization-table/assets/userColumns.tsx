import React from 'react';
import SelectColumnFilter from '../components/select-column-filter/SelectColumnFilter';
import {
  TableCellName,
  AvatarImg,
  TableCellPermitted,
} from '../OrganizationTableStyles';
import avatar from '../../../organization-users/assets/mockAvatar.jpg';
import OptionsButton from '../../options-button/OptionsButton';
import { Column } from 'react-table';

interface IPermittedProps {
  toggleEdit: (id: string) => void;
  onUserDelete: (id: string) => void;
  id: string;
  value: string;
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
    Header: 'User ID',
    accessor: 'id',
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: 'Email',
    accessor: 'email',
    disableSortBy: true,
    Filter: SelectColumnFilter,
    filter: 'includes',
    // eslint-disable-next-line react/display-name
    Cell: ({
      value,
      onUserDelete,
      toggleEdit,
      id,
    }: IPermittedProps): JSX.Element => {
      return (
        <TableCellPermitted>
          {value}
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
