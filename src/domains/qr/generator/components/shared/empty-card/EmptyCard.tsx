import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, SubText, BoldSubText, Inner } from './EmptyCardStyles';
import QuestionIcon from './components/question-icon/QuestionIcon';

interface Props {
  label: string;
  labelSubtext: string;
}

const EmptyCard: React.FC<Props> = ({ label, labelSubtext }: Props) => {
  const { t } = useTranslation();
  const tLabel = t(label);
  const tLabelSubtext = t(labelSubtext);
  return (
    <Container>
      <Inner>
        <QuestionIcon />
        <BoldSubText>{tLabel}</BoldSubText>
        <SubText>{tLabelSubtext}</SubText>
      </Inner>
    </Container>
  );
};

export default EmptyCard;
