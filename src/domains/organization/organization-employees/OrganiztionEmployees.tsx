/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../state/hooks';
import ConfirmDenyModal from '../shared/confirm-deny-modal/ConfirmDenyModal';
import {
  Container,
  ButtonsGroup,
  Header,
  BulkImport,
  Input,
  InputWrapper,
} from './OrganizationEmployeesStyles';
import { getEmployees } from '../organization-users/OrganizationUsersActions';
import Button from '../organization-users/components/Button/Button';

import OrganizationTable from '../shared/organization-table/OrganizationTable';
import employeesColumns from '../shared/organization-table/assets/employeesColumns';

import ImportIcon from '../organization-users/assets/import-icon';
import SearchIcon from '../organization-users/assets/search-icon';

const OrganizationUsers: React.FC = () => {
  const [value, setValue] = useState('');
  const [isEdit, setEdit] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const history = useHistory();
  const [, setDeleteUserId] = useState<string>('');
  const dispatch = useDispatch();

  const employees = useAppSelector(
    ({ organizationUsers }) => organizationUsers.employees,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleEdit = (id?: string) => {
    if (id) {
      history.push(`/school/organization/staff/edit/${id}`);
    }
    setEdit(!isEdit);
  };

  const createMember = () => {
    history.push('/school/organization/staff/new');
    setEdit(!isEdit);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onUserDelete = (id: string) => {
    setDeleteUserId(id);
    setIsDeleteModalOpen(true);
  };

  const onUserConfirmDelete = () => {
    // dispatch(deleteUserAccount({ id: deleteUserId }));
    setIsDeleteModalOpen(false);
  };

  useEffect(() => {
    // TODO: update with universal solution
    dispatch(getEmployees({ schoolId: 74 }));
  }, []);

  return (
    <Container>
      <Header>
        <h1>Employees</h1>
        <ButtonsGroup>
          <BulkImport>
            <ImportIcon />
            Bulk import
          </BulkImport>
          <Button onClick={createMember}>New member</Button>
        </ButtonsGroup>
      </Header>
      <InputWrapper>
        <Input
          type="search"
          placeholder="Search by name..."
          value={value}
          onChange={handleChange}
        />
        <SearchIcon />
      </InputWrapper>
      {/* {Boolean(employees) && (
        <OrganizationTable
          Data={employees}
          Columns={employeesColumns}
          value={value}
          toggleEdit={toggleEdit}
          onUserDelete={onUserDelete}
          isLoading={false}
        />
      )} */}
      <ConfirmDenyModal
        shouldShow={isDeleteModalOpen}
        closeModal={() => setIsDeleteModalOpen(false)}
        onConfirm={() => onUserConfirmDelete()}
        onDeny={() => setIsDeleteModalOpen(false)}
        prompt="Are you sure you want to delete this user?"
        confirmLabel="Ok"
        cancelLabel="Cancel"
      />
    </Container>
  );
};

export default OrganizationUsers;
