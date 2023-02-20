import React, { useMemo } from 'react';
import { Column } from 'react-table';
import Status from '../../../components/table/components/status/Status';

import { Container, TableContainer } from './OrganizationsListTableStyles';
import TableComponent from '../../../components/table/Table';
import MoreIcon from '../../../components/table/icons/more/More';
import Toggle from '../../../components/table/icons/toggle/Toggle';

const OrganizationsListTable: React.FC = () => {
  const columns = useMemo<Column[]>(
    () => [
      {
        Header: 'Name/ID',
        accessor: 'name',
        disableFilters: true,
        sortInverted: true,
      },
      {
        Header: 'Type',
        accessor: 'type',
        disableFilters: true,
        disableSortBy: true,
      },
      {
        Header: 'Stuff',
        accessor: 'stuff',
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: 'Student',
        accessor: 'student',
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: 'Guardian',
        accessor: 'guardian',
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: 'Email',
        accessor: 'email',
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: 'SMS',
        accessor: 'sms',
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: 'Priority',
        accessor: 'priority',
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: 'Source/ID',
        accessor: 'sourceID',
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: 'Active',
        accessor: 'active',
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: '',
        accessor: 'more',
        disableSortBy: true,
        disableFilters: true,
      },
    ],
    [],
  );

  //    This data are hardcoded for demo purposes.
  const data = useMemo(
    () => [
      {
        name: 'Carrier Deelopment School',
        type: 'Middle School',
        stuff: <Status status={true} />,
        student: <Status status={true} />,
        guardian: <Status status={false} />,
        email: <Status status={true} />,
        sms: <Status status={false} />,
        priority: 0,
        sourceID: 'JPS',
        active: <Toggle />,
        more: <MoreIcon isActive={false} />,
      },
      {
        name: 'Carrier Deelopment School',
        type: 'Middle School',
        stuff: <Status status={true} />,
        student: <Status status={true} />,
        guardian: <Status status={false} />,
        email: <Status status={true} />,
        sms: <Status status={false} />,
        priority: 0,
        sourceID: 'JPS',
        active: <Toggle />,
        more: <MoreIcon isActive={false} />,
      },
      {
        name: 'Carrier Deelopment School',
        type: 'Middle School',
        stuff: <Status status={true} />,
        student: <Status status={true} />,
        guardian: <Status status={false} />,
        email: <Status status={true} />,
        sms: <Status status={false} />,
        priority: 0,
        sourceID: 'JPS',
        active: <Toggle />,
        more: <MoreIcon isActive={false} />,
      },
      {
        name: 'Carrier Deelopment School',
        type: 'Middle School',
        stuff: <Status status={true} />,
        student: <Status status={true} />,
        guardian: <Status status={false} />,
        email: <Status status={true} />,
        sms: <Status status={false} />,
        priority: 0,
        sourceID: 'JPS',
        active: <Toggle />,
        more: <MoreIcon isActive={false} />,
      },
      {
        name: 'Barrier Deelopment School',
        type: 'Middle School',
        stuff: <Status status={true} />,
        student: <Status status={true} />,
        guardian: <Status status={false} />,
        email: <Status status={true} />,
        sms: <Status status={false} />,
        priority: 0,
        sourceID: 'JPS',
        active: <Toggle />,
        more: <MoreIcon isActive={false} />,
      },
    ],
    [],
  );

  return (
    <Container>
      <TableContainer>
        <TableComponent columns={columns} data={data} defaultSortBy="name" />
      </TableContainer>
    </Container>
  );
};

export default OrganizationsListTable;
