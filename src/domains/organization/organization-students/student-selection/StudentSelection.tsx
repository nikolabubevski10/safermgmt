import React, { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useHistory } from 'react-router-dom';
import { Container, TopContainer } from './StudentSelectionStyles';
import { useAppDispatch } from '../../../../state/hooks';
import { launchStudentSelection } from '../state/OrgStudentsActions';
import StudentTable from './components/student-table/StudentTable';

const StudentSelection: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(launchStudentSelection({ schoolId: 74 }));
  }, []);

  return (
    <Container>
      <TopContainer>
        <h1>Students</h1>
      </TopContainer>
      <StudentTable />
    </Container>
  );
};

export default StudentSelection;
