import React from 'react';
import { Radio, Label } from './OptionStyles';
import { IFormValues } from '../../../../../../../../../types';
import { UseFormRegister } from 'react-hook-form';

interface Props {
  options: string[];
  i: number;
  register: UseFormRegister<IFormValues>;
  fieldName: keyof IFormValues;
}

const Option: React.FC<Props> = ({
  options,
  i,
  register,
  fieldName,
}: Props) => {
  const option = options[i] || '';
  return (
    <Label>
      <Radio {...register(fieldName)} value={option} />
      {option}
    </Label>
  );
};

export default Option;
