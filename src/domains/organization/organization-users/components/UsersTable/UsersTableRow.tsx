import React from 'react';

import { IUserAccount } from '../../types';
import OptionsButton from '../../../shared/options-button/OptionsButton';

import {
  TableRow,
  TableCellName,
  TableCellId,
  TableCellEmail,
  AvatarImg,
} from './UsersTableStyles';

import avatar from '../../assets/mockAvatar.jpg';

interface IUsersTableRow {
  userData: IUserAccount;
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
          {userData.name.first} {userData.name.last}
        </span>
      </TableCellName>
      <TableCellId>{userData.id}</TableCellId>
      <TableCellEmail>
        <div>{userData.email}</div>
        <OptionsButton
          editClick={() => toggleEdit(userData.id || '')}
          deleteClick={() => userData?.id && onUserDelete(userData.id)}
        />
      </TableCellEmail>
    </TableRow>
  );
};

export default UsersTableRow;
