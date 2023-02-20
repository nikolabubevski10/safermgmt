import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card,
  CardTopContainer,
  MainActionButton,
} from '../shared/sharedStyles';
import EmptyCard from '../shared/empty-card/EmptyCard';
import { useAppSelector } from '../../../../../state/hooks';
import IdCardContents from './components/id-card-contents/IdCardContents';
import handleMultipleDownload from '../shared/download/handleMultipleDownload';
import { IPerson, IContact } from '../../state/types';

const emptyQrLabel = 'No Id Card Yet';
const searchInstructions = 'Search by name first';
const idCard = 'Id Card';
const downloadText = 'Download';

const QrCodeCard: React.FC = () => {
  const { t } = useTranslation();
  const tIdCard = t(idCard);
  const tDownload = t(downloadText);

  const {
    currentPersonId,
    persons,
    schools,
    currentSchoolId,
    currentContactId,
  } = useAppSelector(({ generator, navigation }) => ({
    ...generator,
    ...navigation,
  }));

  const currentSchool = schools.find((school) => school.id === currentSchoolId);

  const isPersonSelected = currentPersonId !== null;

  let currentPerson: IPerson | IContact | undefined;
  if (!!currentContactId && !!currentPersonId) {
    const currentStudent = persons.find(
      (person) => person.id === currentPersonId,
    );
    const contacts = currentStudent?.contacts || [];
    if (contacts.length > 0) {
      currentPerson = contacts.find(
        (contact) => contact.id == currentContactId,
      );
    }
  } else if (currentPersonId) {
    currentPerson = persons.find((person) => person.id === currentPersonId);
  }

  const download = () => {
    if (currentPerson) {
      handleMultipleDownload({
        persons: [currentPerson],
        currentSchool,
        width: 600,
      });
    }
  };

  return (
    <Card>
      <CardTopContainer>
        <h4>{tIdCard}</h4>
        <MainActionButton onClick={download} shouldShow={isPersonSelected}>
          {tDownload}
        </MainActionButton>
      </CardTopContainer>
      {isPersonSelected ? (
        <IdCardContents
          currentPerson={currentPerson}
          currentSchool={currentSchool}
        />
      ) : (
        <EmptyCard label={emptyQrLabel} labelSubtext={searchInstructions} />
      )}
    </Card>
  );
};

export default QrCodeCard;
