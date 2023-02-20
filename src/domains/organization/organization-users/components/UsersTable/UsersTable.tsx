import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Spinner from '../../../shared/spinner/Spinner';
import UsersTableRow from './UsersTableRow';
import {
  TableHeader,
  HeaderId,
  HeaderName,
  HeaderEmail,
  SpinnerContainer,
} from './UsersTableStyles';
import ArrowIcon from '../../assets/arrow-icon';
import { IUserAccount } from '../../types';

const headerName = 'Name';
const headerId = 'User ID';
const headerEmail = 'Email';

interface IUsersTable {
  value: string;
  toggleEdit: (id: string) => void;
  onUserDelete: (id: string) => void;
  Data: IUserAccount[];
  isLoading: boolean;
}

const UsersTable: React.FC<IUsersTable> = ({
  value,
  toggleEdit,
  Data,
  onUserDelete,
  isLoading,
}: IUsersTable) => {
  const { t } = useTranslation();
  const [usersData, setUsersData] = useState(Data);

  useEffect(() => {
    if (!value.length) setUsersData(usersData);
    const filteredUsers = Data.filter((user: IUserAccount) =>
      user?.name.first
        ?.toLocaleLowerCase()
        .startsWith(value.toLocaleLowerCase()),
    );
    setUsersData(filteredUsers);
  }, [value, Data]);

  const tHeaderName = t(headerName);
  const tHeaderId = t(headerId);
  const tHeaderEmail = t(headerEmail);

  return isLoading ? (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  ) : (
    <React.Fragment>
      <TableHeader>
        <HeaderName>
          {tHeaderName}
          <ArrowIcon />
        </HeaderName>
        <HeaderId>{tHeaderId}</HeaderId>
        <HeaderEmail>{tHeaderEmail}</HeaderEmail>
      </TableHeader>
      {usersData.map((user: IUserAccount) => (
        <UsersTableRow
          key={user.id}
          userData={user}
          onUserDelete={onUserDelete}
          toggleEdit={toggleEdit}
        />
      ))}
    </React.Fragment>
  );
};

export default UsersTable;
