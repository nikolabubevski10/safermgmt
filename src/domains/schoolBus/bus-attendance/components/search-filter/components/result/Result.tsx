import React from 'react';
import { Container, HighlightStyles } from './ResultStyles';
import Highlighter from 'react-highlight-words';
import { IBusAttendance } from '../../../../types';

interface IBusAttendanceProps {
  data: IBusAttendance;
  onClick: (busAttendanceId: string) => void;
  searchText: string;
}

const getStudentText = (rec: IBusAttendance) => `${rec.id} - ${rec.name}`;

const Result: React.FC<IBusAttendanceProps> = ({
  data,
  onClick,
  searchText,
}: IBusAttendanceProps) => {
  const text = getStudentText(data);
  const handleClick = () => onClick(data.id);
  const searchWords = searchText.split(' ');

  return (
    <Container onClick={handleClick}>
      <HighlightStyles />
      <Highlighter
        highlightClassName="generator-result-highlight"
        searchWords={searchWords}
        autoEscape={true}
        textToHighlight={text}
        caseSensitive={false}
      />
    </Container>
  );
};

export default Result;
