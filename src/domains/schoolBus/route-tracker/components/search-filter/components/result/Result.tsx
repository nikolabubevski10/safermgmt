import React from 'react';
import { Container, HighlightStyles } from './ResultStyles';
import Highlighter from 'react-highlight-words';
import { IBusRoute } from '../../../../types';

interface IBusAttendanceProps {
  data: IBusRoute;
  onClick: (busAttendanceId: string) => void;
  searchText: string;
}

const getBusRouteText = (rec: IBusRoute) => `${rec.bus.number}`;

const Result: React.FC<IBusAttendanceProps> = ({
  data,
  onClick,
  searchText,
}: IBusAttendanceProps) => {
  const text = getBusRouteText(data);
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
