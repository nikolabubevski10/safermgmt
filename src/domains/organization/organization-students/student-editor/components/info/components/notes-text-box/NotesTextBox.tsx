import React from 'react';
import { Container, TextArea, Label, Overlay } from './NotesTextBoxStyles';
import { IFormValues } from '../../../../../types';
import { UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import fieldLabels from '../../../../assets/fieldLabels';
import fieldNames from '../../../../assets/fieldNames';

interface Props {
  isDisabled?: boolean;
  isHighlighted: boolean;
  isValid: boolean;
  register: UseFormRegister<IFormValues>;
}

const NotesTextBox: React.FC<Props> = ({
  isValid,
  isHighlighted,
  register,
  isDisabled = false,
}: Props) => {
  const { t } = useTranslation();
  const tLabel = t(fieldLabels.notes);
  return (
    <Container>
      <Label>{tLabel}</Label>
      <TextArea
        {...register(fieldNames.NOTES)}
        isDisabled={isDisabled}
        isHighlighted={isHighlighted}
        isValid={isValid}
      />
      <Overlay isDisabled={isDisabled} />
    </Container>
  );
};

export default NotesTextBox;
