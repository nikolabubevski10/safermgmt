import React from 'react';
import { Container } from './DatePickerStyles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './DatePicker.css';

interface Props {
  startDate: Date;
  children: JSX.Element;
  isOpen: boolean;
  handleDateChange: (x: Date) => void;
}

const DatePickerCalender: React.FC<Props> = (props: Props) => {
  const { startDate, handleDateChange, children, isOpen } = props;

  return (
    <Container>
      <button>{children}</button>
      {isOpen && (
        <DatePicker selected={startDate} onChange={handleDateChange} inline />
      )}
    </Container>
  );
};

export default DatePickerCalender;
