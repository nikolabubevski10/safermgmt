import React from 'react';
import { IPerson } from '../../../../../../state/types';
import Highlighter from 'react-highlight-words';
import getPersonText from '../../../../utils/getPersonText';

interface Props {
  person: IPerson;
  onClick: (id: string) => void;
  searchText: string;
}

const Result: React.FC<Props> = ({ person, onClick, searchText }: Props) => {
  const text = getPersonText(person);
  const handleClick = () => onClick(person.id);
  const searchWords = searchText.split(' ');

  return (
    <Highlighter
      highlightClassName="generator-result-highlight"
      className="generator-highlighter-wrapper"
      searchWords={searchWords}
      autoEscape={true}
      textToHighlight={text}
      caseSensitive={false}
      onClick={handleClick}
    />
  );
};

export default Result;
