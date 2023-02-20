import React from 'react';
import ScheduleTable from './components/schedule-table/ScheduleTable';
import { Container } from './ScheduleStyles';

const Schedule: React.FC = () => {
  return (
    <Container>
      <ScheduleTable />
    </Container>
  );
};

export default Schedule;
