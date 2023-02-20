import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './FilterButtonsStyles';
import Filter from './components/filter/Filter';
import { useAppDispatch, useAppSelector } from '../../../../state/hooks';
import {
  toggleIsAbsentSelected,
  toggleIsPresentSelected,
} from '../../state/AttendanceDashboardActions';
import NeutralDisplay from './components/neutral-display/NeutralDisplay';

const label1 = 'Total Present';
const label2 = 'Total Absent';
const label3 = 'Students';

interface Props {
  totalPresentByTimeGroup: number[];
  totalAbsentByTimeGroup: number[];
}

const FilterButtons: React.FC<Props> = ({
  totalAbsentByTimeGroup,
  totalPresentByTimeGroup,
}: Props) => {
  const { t } = useTranslation();
  const tLabel1 = t(label1);
  const tLabel2 = t(label2);
  const tLabel3 = t(label3);
  const dispatch = useAppDispatch();

  const { isAbsentSelected, isPresentSelected, studentCount } = useAppSelector(
    ({ attendanceDashboard }) => attendanceDashboard,
  );

  const totalPresent = totalPresentByTimeGroup.reduce(
    (acc, curr) => curr + acc,
    0,
  );
  const totalAbsent = totalAbsentByTimeGroup.reduce(
    (acc, curr) => curr + acc,
    0,
  );

  const handleAbsentClick = () => {
    dispatch(toggleIsAbsentSelected());
  };

  const handlePresentClick = () => {
    dispatch(toggleIsPresentSelected());
  };

  return (
    <Container>
      <Filter
        amount={totalPresent}
        isChecked={isPresentSelected}
        icon={'times'}
        type={'positive'}
        label={tLabel1}
        onClick={handlePresentClick}
      />
      <Filter
        amount={totalAbsent}
        isChecked={isAbsentSelected}
        icon={'times'}
        type={'negative'}
        label={tLabel2}
        onClick={handleAbsentClick}
      />
      <NeutralDisplay label={tLabel3} amount={String(studentCount)} />
    </Container>
  );
};

export default FilterButtons;
