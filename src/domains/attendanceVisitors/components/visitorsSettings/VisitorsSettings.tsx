import React, { useMemo } from 'react';
import { Container, CardWrapper } from './VisitorsSettingsStyle';
import Card from '../optionsCard/Card';
import { useAppSelector, useAppDispatch } from '../../../../state/hooks';
import { setVisitorField } from '../../state/AttendanceVisitorsActions';

const VisitorsSettings: React.FC = () => {
  const { visitorFieldsOptions } = useAppSelector(
    ({ attendanceVisitors }) => attendanceVisitors,
  );
  const dispatch = useAppDispatch();

  const fieldOptions = useMemo(() => visitorFieldsOptions, [
    visitorFieldsOptions,
  ]);

  const handleActiveChange = (id: number, status: boolean) => {
    dispatch(setVisitorField(id, !status));
  };

  return (
    <Container>
      {fieldOptions.map((field, index) => (
        <CardWrapper
          key={index}
          onClick={() => handleActiveChange(field.id, field.isActive)}
        >
          <Card isActive={field.isActive}>{field.label}</Card>
        </CardWrapper>
      ))}
    </Container>
  );
};

export default VisitorsSettings;
