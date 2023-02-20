import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Column, Row } from 'react-table';

import Button from './components/button/Button';
import Filter from './components/filter/Filter';
import Link from './components/table/components/link/Link';
import SelectColumnFilter from './components/table/components/select-column-filter/SelectColumnFilter';
import Status from './components/table/components/status/Status';
import Table from './components/table/Table';
import useContactModal from './components/contact-modal/useContactModal';
import ContactModal from './components/contact-modal/ContactModal';

import {
  ButtonContainer,
  Container,
  FiltersContainer,
  Header,
  Heading,
  TableContainer,
} from './OrgProfileCompletionStyles';

const headingText = 'Profile Completion';
const exportText = 'Export report';

const statusFilter = (rows: Row[], id: string[], filterValue: boolean) => {
  if (filterValue === null) {
    return rows;
  } else if (filterValue === true) {
    return rows.filter((row) => {
      return row.values.status.props.status === true;
    });
  } else if (filterValue === false) {
    return rows.filter((row) => {
      return row.values.status.props.status === false;
    });
  } else {
    return [];
  }
};

const OrgProfileCompletion: React.FC = () => {
  const { t } = useTranslation();

  const {
    shouldShowContactModal,
    // openContactModal,
    closeContactModal,
    contactModalRef,
  } = useContactModal();

  const columns = useMemo<Column[]>(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        disableFilters: true,
        sortInverted: true,
      },
      {
        Header: 'Date',
        accessor: 'date',
        disableFilters: true,
      },
      {
        Header: 'Person ID',
        accessor: 'personId',
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: 'Person Type',
        accessor: 'personType',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: 'Status',
        accessor: 'status',
        disableSortBy: true,
        disableFilters: true,
        // filter: 'equals',
        filter: statusFilter,
      },
      {
        Header: 'Contact',
        accessor: 'contact',
        disableSortBy: true,
        disableFilters: true,
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        date: '20 May 2021',
        name: 'Jasmine Edwards',
        personId: '224708',
        personType: 'Student',
        status: <Status status={true} />,
        contact: <Link onClick={() => undefined}>Contact</Link>,
      },
      {
        date: '19 May 2021',
        name: 'Macy Hunt',
        personId: '224708',
        personType: 'Student',
        status: <Status status={true} />,
        contact: <Link onClick={() => undefined}>Contact</Link>,
      },
      {
        date: '19 May 2021',
        name: 'Brian Foster',
        personId: '2g5&hfDyEG6384hfnvs6',
        personType: 'Staff',
        status: <Status status={false} />,
        contact: <Link onClick={() => undefined}>Contact</Link>,
      },
      {
        date: '19 May 2021',
        name: 'Emmanuel Kluste',
        personId: '2g5&hfDyEG6384hfnvs6',
        personType: 'Staff',
        status: <Status status={false} />,
        contact: <Link onClick={() => undefined}>Contact</Link>,
      },
      {
        date: '19 May 2021',
        name: 'Name Nameson',
        personId: '2g5&hfDyEG6384hfnvs6',
        personType: 'Parent',
        status: <Status status={false} />,
        contact: <Link onClick={() => undefined}>Contact</Link>,
      },
    ],
    [],
  );

  const [
    shouldShowCompletedProfiles,
    setShouldShowCompletedProfiles,
  ] = useState(true);
  const [
    shouldShowIncompletedProfiles,
    setShouldShowIncompletedProfiles,
  ] = useState(true);

  const tHeadingText = t(headingText);
  const tExportText = t(exportText);

  return (
    <Container>
      <ContactModal
        onClose={closeContactModal}
        ref={contactModalRef}
        shouldShow={shouldShowContactModal}
      />

      <Header>
        <Heading>{tHeadingText}</Heading>
        <ButtonContainer>
          <Button onClick={() => undefined}>{tExportText}</Button>
        </ButtonContainer>
      </Header>

      <FiltersContainer>
        <Filter
          amount={
            data.filter((elem) => elem.status.props.status === true).length
          }
          isChecked={shouldShowCompletedProfiles}
          icon="check"
          label="Total completed profiles"
          onClick={() => setShouldShowCompletedProfiles((prev) => !prev)}
          type="positive"
        />

        <Filter
          amount={
            data.filter((elem) => elem.status.props.status === false).length
          }
          isChecked={shouldShowIncompletedProfiles}
          icon="times"
          label="Total incompleted profiles"
          onClick={() => setShouldShowIncompletedProfiles((prev) => !prev)}
          type="negative"
        />
      </FiltersContainer>

      <TableContainer>
        <Table
          columns={columns}
          data={data}
          defaultSortBy="date"
          shouldShowCompletedProfiles={shouldShowCompletedProfiles}
          shouldShowIncompletedProfiles={shouldShowIncompletedProfiles}
        />
      </TableContainer>
    </Container>
  );
};

export default OrgProfileCompletion;
