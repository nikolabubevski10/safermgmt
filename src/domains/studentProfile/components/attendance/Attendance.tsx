import React from 'react';
import DatePicker from '../date-picker/DatePicker';
import AttendanceGraph from './components/graphs/AttendanceGraph';
import { Container, CardContainer } from './AttendanceStyle';
import AttendanceCard from './components/attendance-card/AttendanceCard';

const Attendance: React.FC = () => {
  const handleChange = (data: unknown) => {
    return data;
  };
  return (
    <Container>
      <DatePicker onDateChange={handleChange} />
      <CardContainer>
        <AttendanceCard />
        <AttendanceGraph />
      </CardContainer>
    </Container>
  );
};

export default Attendance;
