import React from 'react';
import { Container, Label, Overlay } from './GenderSelectorStyles';
import { IFormValues } from '../../../../../types';
import { UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import fieldLabels from '../../../../assets/fieldLabels';
import fieldNames from '../../../../assets/fieldNames';
import genderOptions from '../../../../assets/genderOptions';
import SliderSelector from './components/slider-selector/SliderSelector';

interface Props {
  isDisabled?: boolean;
  value: string;
  register: UseFormRegister<IFormValues>;
}

const GenderSelector: React.FC<Props> = ({
  value,
  register,
  isDisabled = false,
}: Props) => {
  const { t } = useTranslation();
  const tLabel = t(fieldLabels.gender);

  const genderSelectorPositionIndex = genderOptions.findIndex(
    (option) => option === value,
  );

  return (
    <Container>
      <Overlay isDisabled={isDisabled} />
      <Label>{tLabel}</Label>
      <SliderSelector
        fieldName={fieldNames.GENDER}
        options={genderOptions}
        positionIndex={genderSelectorPositionIndex}
        register={register}
      />
    </Container>
  );
};

export default GenderSelector;
