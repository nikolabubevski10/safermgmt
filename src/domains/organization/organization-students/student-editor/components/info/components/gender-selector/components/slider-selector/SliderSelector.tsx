import React from 'react';
import { Container, Slider, SliderContainer } from './SliderSelectorStyles';
import Option from './components/option/Option';
import { IFormValues } from '../../../../../../../types';
import { UseFormRegister } from 'react-hook-form';

interface Props {
  positionIndex: number;
  options: string[];
  register: UseFormRegister<IFormValues>;
  fieldName: keyof IFormValues;
}

const SliderSelector: React.FC<Props> = ({
  positionIndex,
  options,
  register,
  fieldName,
}: Props) => {
  return (
    <Container>
      {options.map((_, i) => (
        <Option
          options={options}
          i={i}
          key={i}
          register={register}
          fieldName={fieldName}
        />
      ))}
      <SliderContainer>
        <Slider optionCount={options.length} positionIndex={positionIndex} />
      </SliderContainer>
    </Container>
  );
};

export default SliderSelector;
