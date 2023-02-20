import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Label, Radio, RadioContainer } from './RadioButtonsStyles';

interface Props {
  answer: boolean | null;
  onChange: React.ChangeEventHandler;
}

const yes = 'yes';
const no = 'no';

const RadioButtons: React.FC<Props> = ({ answer, onChange }: Props) => {
  const { t } = useTranslation();
  const tYes = t(yes);
  const tNo = t(no);

  const isYesChecked = !!answer && answer !== null;
  const isNoChecked = !answer && answer !== null;

  return (
    <Container>
      <RadioContainer>
        <Label>{tYes}</Label>
        <Radio
          checked={isYesChecked}
          value={'fullString'}
          onChange={onChange}
        />
      </RadioContainer>
      <RadioContainer>
        <Label>{tNo}</Label>
        <Radio checked={isNoChecked} value="" onChange={onChange} />
      </RadioContainer>
    </Container>
  );
};

export default RadioButtons;
