import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Spinner from '../../../shared/spinner/Spinner';
import EmployeesTableRow from './EmployeesTableRow';
import {
  TableHeader,
  HeaderId,
  HeaderName,
  HeaderEmail,
  HeaderPermited,
  SpinnerContainer,
} from './EmployeesTableStyles';
import ArrowIcon from '../../../organization-users/assets/arrow-icon';
import { IEmployee } from '../../../organization-users/types';

const headerName = 'Name';
const headerId = 'Employee ID';
const headerEmail = 'Email';
const headerPermitted = 'Permitted';

interface IUsersTable {
  value: string;
  toggleEdit: (id: string) => void;
  onUserDelete: (id: string) => void;
  Data: IEmployee[];
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
  const [employeesData, setEmployeesData] = useState(Data);

  useEffect(() => {
    if (!value.length) setEmployeesData(employeesData);
    const filteredUsers = Data.filter((user: IEmployee) =>
      user?.firstName
        ?.toLocaleLowerCase()
        .startsWith(value.toLocaleLowerCase()),
    );
    setEmployeesData(filteredUsers);
  }, [value, Data]);

  const tHeaderName = t(headerName);
  const tHeaderId = t(headerId);
  const tHeaderEmail = t(headerEmail);
  const tHeaderPermitted = t(headerPermitted);

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
        <HeaderPermited>{tHeaderPermitted}</HeaderPermited>
      </TableHeader>
      {employeesData.map((user: IEmployee, idx: number) => (
        <EmployeesTableRow
          key={`${user.id}-${idx}`}
          userData={user}
          onUserDelete={onUserDelete}
          toggleEdit={toggleEdit}
        />
      ))}
    </React.Fragment>
  );
};

export default UsersTable;
