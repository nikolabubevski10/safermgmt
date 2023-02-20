import React, { useState } from 'react';
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import {
  Container,
  InnerTop,
  InnerBottom,
  DateSelectDiv,
  DateRange,
  DatePickerStyles,
  MoreDatePickerStyles,
} from './DatePickerStyles';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DatePickerToggle from './components/date-picker-toggle/DatePickerToggle';
import { useAppSelector } from '../../../../state/hooks';

interface IPicker {
  startDate: {
    toDate: () => void;
  };
  endDate: {
    toDate: () => void;
  };
}

interface Props {
  children?: JSX.Element;
  // eslint-disable-next-line
  onDateChange: (x: any) => void;
}

const SurveyReportsDatePicker: React.FC<Props> = (props: Props) => {
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
      Today: [moment().startOf('day').toDate()],
      'Year to Date': [
        moment().startOf('year').toDate(),
        moment().endOf('day').toDate(),
      ],
    },
  };

  /* eslint-disable react/prop-types */
  const { onDateChange } = props;
  const [isOpen, setIsOpen] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateRangeChange = (selectedDate: any) => {
    onDateChange({
      startDate: selectedDate[0],
      endDate: selectedDate[1],
    });
  };

  const onApply = (_: unknown, picker: IPicker) => {
    handleDateRangeChange([picker.startDate.toDate(), picker.endDate.toDate()]);
  };

  return (
    <Container>
      <DatePickerStyles />
      <MoreDatePickerStyles />
      <InnerTop>
        <DateRangePicker
          initialSettings={datePickerSettings}
          onShow={() => setIsOpen(false)}
          onHide={() => setIsOpen(true)}
          onApply={onApply}
        >
          <DateSelectDiv>
            <DateRange>
              {moment(startDate).format('ddd, MMM DD, YYYY')} -{' '}
              {moment(endDate).format('ddd, MMM DD, YYYY')}
            </DateRange>
            <DatePickerToggle isOpen={isOpen} />
          </DateSelectDiv>
        </DateRangePicker>
      </InnerTop>
      <InnerBottom></InnerBottom>
    </Container>
  );
};

export default SurveyReportsDatePicker;
