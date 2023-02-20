import React from 'react';

import { IEmployee } from '../../../organization-users/types';
import OptionsButton from '../../../shared/options-button/OptionsButton';
import Toggle from '../Toggle/Toggle';
import {
  TableRow,
  TableCellName,
  TableCellId,
  TableCellEmail,
  TableCellPermitted,
  AvatarImg,
} from './EmployeesTableStyles';

import avatar from '../../../organization-users/assets/mockAvatar.jpg';

interface IUsersTableRow {
  userData: IEmployee;
  onUserDelete: (id: string) => void;
  toggleEdit: (id: string) => void;
}

const UsersTableRow: React.FC<IUsersTableRow> = ({
  userData,
  toggleEdit,
  onUserDelete,
}: IUsersTableRow) => {
  return (
    <TableRow>
      <TableCellName>
        <AvatarImg src={avatar} alt="avatar" />
        <span>
          {userData.firstName} {userData.lastName}
        </span>
      </TableCellName>
      <TableCellId>{userData.id}</TableCellId>
      <TableCellEmail>
        <div>example-email@gmail.com</div>
      </TableCellEmail>
      <TableCellPermitted>
        <Toggle />

        <OptionsButton
          editClick={() => toggleEdit(userData.id || '')}
          deleteClick={() => userData?.id && onUserDelete(userData.id)}
        />
      </TableCellPermitted>
    </TableRow>
  );
};

export default UsersTableRow;
