import React from 'react';
import DateToggleDown from '../assets/DateToggleDown';
import DateToggleUp from '../assets/DateToggleUp';
import { Container } from './DatePickerToggleStyles';
interface Props {
  isOpen: boolean;
}

const DatePickerToggle: React.FC<Props> = (props: Props) => {
  const { isOpen } = props;
  return (
    <Container>{isOpen ? <DateToggleUp /> : <DateToggleDown />}</Container>
  );
};

export default DatePickerToggle;
