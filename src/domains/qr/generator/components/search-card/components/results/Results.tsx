import React, { useState, useEffect } from 'react';
import { Container, Inner, SortContainer, SortText } from './ResultsStyles';
import {
  toggleStudentContactSelection,
  togglePersonResultSelection,
  selectSearchResult,
  selectStudentContactResult,
} from '../../../../state/GeneratorActions';
import {
  useAppSelector,
  useAppDispatch,
} from '../../../../../../../state/hooks';
import { useTranslation } from 'react-i18next';
import Arrow from './components/arrow/Arrow';
import getPersonsFilteredByRole from './utils/getPersonsFilteredByRole';
import PersonResult from './components/person-result/PersonResult';
import roleSelectionOptions from '../../../../state/assets/roleSelectionOptions';
import StudentContactResult from './components/student-contact-result/StudentContactResult';
import useDimensions from './hooks/useDimensions';

const nameText = 'Name';

const Results: React.FC = () => {
  const dispatch = useAppDispatch();

  const { ref, dimensions, handleResize } = useDimensions();

  const { t } = useTranslation();
  const tNameText = t(nameText);

  const [isSortedDesc, setIsSortedDesc] = useState<boolean>(false);

  const toggleIsSortedDesc = () => setIsSortedDesc((prev) => !prev);

  const { persons, roleFilter, currentPersonId } = useAppSelector(
    ({ generator }) => generator,
  );

  const personsFilteredByRole = getPersonsFilteredByRole(roleFilter, persons);

  const alphabetizedPersons = [...personsFilteredByRole].sort((a, b) => {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    return 0;
  });

  const sortedPersons = isSortedDesc
    ? alphabetizedPersons.reverse()
    : alphabetizedPersons;

  const handlePersonResultCheckClick = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const checkElem = e.target as HTMLInputElement;
    return dispatch(togglePersonResultSelection(checkElem.value));
  };

  const handleResultTextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const checkElem = e.target as HTMLButtonElement;
    return dispatch(selectSearchResult(checkElem.value));
  };

  const handleStudentContactCheckClick = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const checkElem = e.target as HTMLInputElement;
    try {
      const parsed = JSON.parse(checkElem.value);
      const studentId = parsed.studentId || '';
      const contactId = parsed.contactId || '';

      return dispatch(toggleStudentContactSelection({ studentId, contactId }));
    } catch {
      return;
    }
  };

  const handleStudentContactTextClick = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const checkElem = e.target as HTMLButtonElement;
    try {
      const parsed = JSON.parse(checkElem.value);
      const studentId = parsed.studentId || '';
      const contactId = parsed.contactId || '';

      return dispatch(
        selectStudentContactResult({
          newCurrentPersonId: studentId,
          newCurrentContactId: contactId,
        }),
      );
    } catch {
      return;
    }
  };

  const isInStudentContactsMode =
    roleFilter === roleSelectionOptions.studentContacts.value;

  useEffect(() => {
    handleResize();
  }, [currentPersonId]);

  return (
    <Container ref={ref}>
      <SortContainer onClick={toggleIsSortedDesc}>
        <SortText>{tNameText}</SortText>
        <Arrow isSorted={true} isSortedDesc={isSortedDesc} />
      </SortContainer>
      <Inner maxHeight={dimensions.height}>
        {isInStudentContactsMode
          ? sortedPersons.map((person, i) => (
              <StudentContactResult
                key={i}
                person={person}
                handleCheckClick={handleStudentContactCheckClick}
                handleTextClick={handleStudentContactTextClick}
              />
            ))
          : sortedPersons.map((person, i) => (
              <PersonResult
                key={i}
                person={person}
                handleCheckClick={handlePersonResultCheckClick}
                handleTextClick={handleResultTextClick}
              />
            ))}
      </Inner>
    </Container>
  );
};

export default Results;
