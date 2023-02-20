import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, CountContainer, CountText } from './DownloadButtonStyles';
import { MainActionButton } from '../../../shared/sharedStyles';
import { useAppSelector } from '../../../../../../../state/hooks';
import countSelectedPersons from '../../../shared/download/countSelectedPersons';
import handleMultipleDownload from '../../../shared/download/handleMultipleDownload';
import getSelectedPersonsAndContacts from '../../../shared/download/getSelectedPersonsAndContacts';

const downloadText = 'Download Multiple';

const DownloadButton: React.FC = () => {
  const [generatedCount, setGeneratedCount] = useState<number>(0);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [selectedCount, setSelectedCount] = useState<number>(0);

  const { t } = useTranslation();

  const { persons, schools, currentSchoolId } = useAppSelector(
    ({ generator, navigation }) => ({
      ...navigation,
      ...generator,
    }),
  );

  const currentSchool = schools.find((school) => school.id === currentSchoolId);

  const selectedPersonsCount = countSelectedPersons(persons);

  const countText = `${selectedPersonsCount} item(s) selected`;

  const tDownloadText = t(downloadText);

  const handleDownloadClick = () => {
    const selected = getSelectedPersonsAndContacts(persons);

    if (selected.length > 1) {
      setSelectedCount(selected.length);

      handleMultipleDownload({
        persons: selected,
        currentSchool,
        width: 600,
        setIsLoading: setIsGenerating,
        setGeneratedCount,
      });
    }
  };

  const textWhileGenerating = `generating ${generatedCount} of ${selectedCount}`;

  const isActive = selectedPersonsCount > 0;

  return (
    <Container>
      <CountContainer>
        <CountText>{countText}</CountText>
      </CountContainer>
      <MainActionButton wide onClick={handleDownloadClick} isActive={isActive}>
        {isGenerating ? textWhileGenerating : tDownloadText}
      </MainActionButton>
    </Container>
  );
};

export default DownloadButton;
