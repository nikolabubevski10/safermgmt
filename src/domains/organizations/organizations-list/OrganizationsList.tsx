import React, { useState } from 'react';
import { PATHS } from '../../../globals';
import {
  Container,
  TopContainer,
  StyledLink,
  MainActionButton,
  Input,
  InputWrapper,
} from './OrganizationsListStyle';
import { useTranslation } from 'react-i18next';
import SearchIcon from './assets/search-icon/SearchIcon';
import OrganizationsListTable from './components/orgazations-table/OrganizationsListTable';

const OrganizationsList: React.FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const { t } = useTranslation();

  const tOrgListText = t('Organizations List');
  const tNewOrgText = t('New organization');
  const tPlaceHolderText = t('Search by name or ID…');
  return (
    <Container>
      <TopContainer>
        <h1>{tOrgListText}</h1>
        <StyledLink to={PATHS.newOrganization}>
          <MainActionButton>{tNewOrgText}</MainActionButton>
        </StyledLink>
      </TopContainer>
      <InputWrapper>
        <Input
          type="search"
          placeholder={tPlaceHolderText}
          value={value}
          onChange={handleChange}
        />
        <SearchIcon />
      </InputWrapper>

      <OrganizationsListTable />
    </Container>
  );
};

export default OrganizationsList;
