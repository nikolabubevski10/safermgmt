import React, { useMemo } from 'react';
import { Column } from 'react-table';
import Link from './components/link/Link';
import Table from './components/table/Table';
import { Container, TableContainer } from './VisitorsTableStyles';
import logo from './components/table/assets/logo.svg';
import SignatureModal from '../signature-modal/SignatureModal';
import useSignatureModal from '../signature-modal/useSignatureModal';
const VisitorsTable: React.FC = () => {
  const {
    shouldShowSignatureModal,
    openSignatureModal,
    closeSignatureModal,
    signatureModalRef,
  } = useSignatureModal();

  const handleSignatureClick = () => {
    openSignatureModal();
  };

  const columns = useMemo<Column[]>(
    () => [
      {
        Header: '',
        accessor: 'photo',
        disableFilters: true,
        disableSortBy: true,
      },
      {
        Header: 'Photo/Name',
        accessor: 'name',
        disableFilters: true,
        sortInverted: true,
      },
      {
        Header: 'Sign In',
        accessor: 'signIn',
        disableFilters: true,
      },
      {
        Header: 'Driver License',
        accessor: 'driverLicense',
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: 'Phone Number',
        accessor: 'phoneNumber',
        disableSortBy: true,
        filter: 'includes',
      },
      {
        Header: 'Person Visiting',
        accessor: 'personVisiting',
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: 'Sign Out',
        accessor: 'signOut',
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: 'Signature',
        accessor: 'signature',
        disableSortBy: true,
      },
    ],
    [],
  );

  // The below data is hardcoded for demo purpose it will coming fron API in future

  const data = useMemo(
    () => [
      {
        photo: <img src={logo} alt="profile" />,
        name: 'Jasmine Edwards',
        signIn: '2:35 PM',
        driverLicense: 'G544-061-73-925-0',
        personVisiting: 'Student Namson',
        phoneNumber: '123-423-2321',
        signOut: '2:55 PM',
        signature: <Link onClick={handleSignatureClick}>Signature</Link>,
      },
      {
        photo: <img src={logo} alt="profile" />,
        name: 'Jasmine Edwards',
        signIn: '2:35 PM',
        driverLicense: 'G544-061-73-925-0',
        personVisiting: 'Student Namson',
        phoneNumber: '123-423-2321',
        signOut: '2:55 PM',
        signature: <Link onClick={handleSignatureClick}>Signature</Link>,
      },
      {
        photo: <img src={logo} alt="profile" />,
        name: 'Jasmine Edwards',
        signIn: '2:35 PM',
        driverLicense: 'G544-061-73-925-0',
        personVisiting: 'Student Namson',
        phoneNumber: '123-423-2321',
        signOut: '2:55 PM',
        signature: <Link onClick={handleSignatureClick}>Signature</Link>,
      },
      {
        photo: <img src={logo} alt="profile" />,
        name: 'Jasmine Edwards',
        signIn: '2:35 PM',
        driverLicense: 'G544-061-73-925-0',
        personVisiting: 'Student Namson',
        phoneNumber: '123-423-2321',
        signOut: '2:55 PM',
        signature: <Link onClick={handleSignatureClick}>Signature</Link>,
      },
      {
        photo: <img src={logo} alt="profile" />,
        name: 'Jasmine Edwards',
        signIn: '2:35 PM',
        driverLicense: 'G544-061-73-925-0',
        personVisiting: 'Student Namson',
        phoneNumber: '123-423-2321',
        signOut: '2:55 PM',
        signature: <Link onClick={handleSignatureClick}>Signature</Link>,
      },
    ],
    [],
  );

  return (
    <Container>
      <SignatureModal
        onClose={closeSignatureModal}
        ref={signatureModalRef}
        shouldShow={shouldShowSignatureModal}
      />
      <TableContainer>
        <Table columns={columns} data={data} defaultSortBy="date" />
      </TableContainer>
    </Container>
  );
};

export default VisitorsTable;
