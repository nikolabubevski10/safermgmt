import React from 'react';
import { IPerson } from '../../../../../../state/types';
import { Container, CheckInput, Label, Text } from './PersonResultStyles';
import formatName from './utils/formatName';

interface Props {
  person: IPerson;
  handleCheckClick: React.ChangeEventHandler<HTMLInputElement>;
  handleTextClick: React.MouseEventHandler<HTMLButtonElement>;
}

const PersonResult: React.FC<Props> = ({
  person,
  handleCheckClick,
  handleTextClick,
}: Props) => {
  const text = formatName(person);

  return (
    <Container>
      <Label>
        <CheckInput
          value={person.id}
          checked={person.isSelected}
          onChange={handleCheckClick}
        />
        <div className="result-check-mark" />
      </Label>
      <Text value={person.id} onClick={handleTextClick}>
        {text}
      </Text>
    </Container>
  );
};

export default PersonResult;
