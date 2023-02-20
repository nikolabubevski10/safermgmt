import React, { useState } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import {
  Container,
  InnerTop,
  DateSelectDiv,
  DateRange,
  DatePickerStyles,
  MoreDatePickerStyles,
} from './DatePickerStyles';
import DatePickerToggle from './components/date-picker-toggle/DatePickerToggle';
import { useAppSelector } from '../../../../state/hooks';
import { startOfToday, endOfToday, format } from 'date-fns';
import getPastNYearsRanges from './utils/getPastNYearsRanges';

interface IPicker {
  startDate: {
    toDate: () => Date;
  };
  endDate: {
    toDate: () => Date;
  };
}

interface IDate {
  startDate: Date;
  endDate: Date;
}

interface Props {
  children?: JSX.Element;
  onDateChange: (date: IDate) => void;
}

const SurveyReportsDatePicker: React.FC<Props> = ({ onDateChange }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const { startDate, endDate } = useAppSelector(
    ({ surveyReports }) => surveyReports,
  );

  const datePickerSettings = {
    startDate,
    endDate,
    locale: {
      format: 'ddd, MMM DD, YYYY',
    },
    ranges: {
      Today: [startOfToday(), endOfToday()],
      ...getPastNYearsRanges(5),
    },
  };

  const handleDateRangeChange = (selectedDate: [Date, Date]) => {
    onDateChange({
      startDate: selectedDate[0],
      endDate: selectedDate[1],
    });
  };

  const onApply = (_: unknown, picker: IPicker) => {
    const startDate = picker.startDate.toDate() as Date;
    handleDateRangeChange([startDate, picker.endDate.toDate()]);
  };

  const onShow = () => setIsOpen(false);
  const onHide = () => setIsOpen(true);

  const formattedStartDate = format(startDate, 'ccc, MMM dd, yyyy');
  const formattedEndDate = format(endDate, 'ccc, MMM dd, yyyy');
  const formattedDateRange = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <Container>
      <DatePickerStyles />
      <MoreDatePickerStyles />
      <InnerTop>
        <DateRangePicker
          initialSettings={datePickerSettings}
          onShow={onShow}
          onHide={onHide}
          onApply={onApply}
        >
          <DateSelectDiv>
            <DateRange>{formattedDateRange}</DateRange>
            <DatePickerToggle isOpen={isOpen} />
          </DateSelectDiv>
        </DateRangePicker>
      </InnerTop>
    </Container>
  );
};

export default SurveyReportsDatePicker;
