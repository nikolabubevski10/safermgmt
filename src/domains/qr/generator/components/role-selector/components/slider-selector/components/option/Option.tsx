import React from 'react';
import { Radio, Label } from './OptionStyles';

interface Props {
  options: {
    label: string;
    value: string;
  }[];
  i: number;
  onClick: React.MouseEventHandler;
}

const Option: React.FC<Props> = ({ options, i, onClick }: Props) => {
  const { label, value } = options[i];
  const radioValue = value || '';
  const radioLabel = label || '';
  return (
    <Label>
      <Radio onClick={onClick} value={radioValue} />
      {radioLabel}
    </Label>
  );
};

export default Option;
