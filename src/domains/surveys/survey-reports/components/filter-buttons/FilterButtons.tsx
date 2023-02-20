import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './FilterButtonsStyles';
import Filter from './components/filter/Filter';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import {
  toggleIsTotalCompletedSelected,
  toggleIsTotalIncompletedSelected,
} from '../../state/SurveyReportsActions';
import { isWithinInterval } from 'date-fns';

const label1 = 'Total Complete';
const label2 = 'Total Incomplete';

const FilterButtons: React.FC = () => {
  const { t } = useTranslation();
  const tLabel1 = t(label1);
  const tLabel2 = t(label2);
  const dispatch = useAppDispatch();
  const {
    isTotalCompletedSelected,
    isTotalIncompletedSelected,
    reports,
    startDate,
    endDate,
  } = useAppSelector(({ surveyReports }) => surveyReports);

  const reportsInTimeRange = reports.filter((r) => {
    return isWithinInterval(r.date, { start: startDate, end: endDate });
  });

  const totalCompleted = reportsInTimeRange.filter((r) => !!r.isComplete)
    .length;
  const totalIncompleted = reportsInTimeRange.filter((r) => !r.isComplete)
    .length;

  const handleTotalCompletedClick = () => {
    dispatch(toggleIsTotalCompletedSelected());
  };

  const handleTotalIncompletedClick = () => {
    dispatch(toggleIsTotalIncompletedSelected());
  };

  return (
    <Container>
      <Filter
        amount={totalCompleted}
        isChecked={isTotalCompletedSelected}
        icon={'times'}
        type={'positive'}
        label={tLabel1}
        onClick={handleTotalCompletedClick}
      />
      <Filter
        amount={totalIncompleted}
        isChecked={isTotalIncompletedSelected}
        icon={'times'}
        type={'negative'}
        label={tLabel2}
        onClick={handleTotalIncompletedClick}
      />
    </Container>
  );
};

export default FilterButtons;
