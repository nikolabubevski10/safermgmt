import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  InfoContainer,
  NameText,
  SchoolText,
} from './StudentHeaderStyles';
import Avatar from './components/avatar/Avatar';
import formatName from './utils/formatName';
import hasName from './utils/hasName';
import { IFormValues } from '../../../types';
import { useAppSelector } from '../../../../../../state/hooks';

const namePlaceholder = 'Student Name';
const schoolPlaceholder = 'School Name';

interface Props {
  formValues: IFormValues;
}

const StudentHeader: React.FC<Props> = ({ formValues }: Props) => {
  const { t } = useTranslation();
  const tNamePlaceholder = t(namePlaceholder);
  const tSchoolPlaceholder = t(schoolPlaceholder);

  const { currentStudentId, students } = useAppSelector(
    ({ orgStudents }) => orgStudents,
  );

  const currentStudent =
    currentStudentId !== null &&
    students.find((s) => s.id === currentStudentId);

  const name = hasName(formValues) ? formatName(formValues) : tNamePlaceholder;

  const school = currentStudent
    ? currentStudent.school.schoolName
    : tSchoolPlaceholder;

  return (
    <Container>
      <Avatar />
      <InfoContainer>
        <NameText>{name}</NameText>
        <SchoolText>{school}</SchoolText>
      </InfoContainer>
    </Container>
  );
};

export default StudentHeader;
