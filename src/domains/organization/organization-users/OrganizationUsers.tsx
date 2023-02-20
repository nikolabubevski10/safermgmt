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
} from './OrganizationUsersStyles';
import { getUserAccounts, deleteUserAccount } from './OrganizationUsersActions';
import Button from './components/Button/Button';
import OrganizationTable from '../shared/organization-table/OrganizationTable';
import userColumns from '../shared/organization-table/assets/userColumns';

import ImportIcon from './assets/import-icon';
import SearchIcon from './assets/search-icon';

const OrganizationUsers: React.FC = () => {
  const schoolId = useAppSelector(
    ({ navigation }) => navigation.currentSchoolId,
  ) as string;

  const [value, setValue] = useState('');
  const [isEdit, setEdit] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const history = useHistory();
  const [deleteUserId, setDeleteUserId] = useState<string>('');
  const dispatch = useDispatch();

  const isUsersAccountsLoading = useAppSelector(
    ({ organizationUsers }) => organizationUsers.isUsersAccountsLoading,
  );
  const usersStore = useAppSelector(
    ({ organizationUsers }) => organizationUsers,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const toggleEdit = (id?: string) => {
    if (id) {
      history.push(`/school/organization/users/edit/${id}`);
    }
    setEdit(!isEdit);
  };

  const createMember = () => {
    history.push('/school/organization/users/new');
    setEdit(!isEdit);
  };

  const onUserDelete = (id: string) => {
    setDeleteUserId(id);
    setIsDeleteModalOpen(true);
  };

  const onUserConfirmDelete = () => {
    dispatch(deleteUserAccount({ id: deleteUserId }));
    setIsDeleteModalOpen(false);
  };

  useEffect(() => {
    dispatch(getUserAccounts({ schoolId }));
  }, [schoolId]);

  return (
    <Container>
      <Header>
        <h1>Users</h1>
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
      <OrganizationTable
        Data={usersStore?.userAccounts}
        Columns={userColumns}
        value={value}
        toggleEdit={toggleEdit}
        onUserDelete={onUserDelete}
        isLoading={isUsersAccountsLoading}
      />

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
