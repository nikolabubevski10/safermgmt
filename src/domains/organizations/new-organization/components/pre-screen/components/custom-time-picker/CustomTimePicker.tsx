import React, { useState } from 'react';
import {
  Container,
  Label,
  InputContainer,
  TimePickerHeader,
  HeadTitle,
  TimePickerStyles,
} from './CustomTimePickerStyles';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import Triangle from './components/triangle/Triangle';

interface Props {
  time?: Date;
  label: string;
}

const CustomTimePicker: React.FC<Props> = (props: Props) => {
  const { label } = props;

  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (v: unknown) => {
    console.log(v);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const test = () => {
    return (
      <TimePickerHeader>
        <HeadTitle>Hours</HeadTitle>
        <HeadTitle>Mins</HeadTitle>
      </TimePickerHeader>
    );
  };
  return (
    <Container>
      <TimePickerStyles />
      <Label>{label}</Label>

      <InputContainer onClick={handleClick}>
        <TimePicker
          onChange={(v) => handleChange(v)}
          placement="topLeft"
          defaultValue={moment()}
          showSecond={false}
          open={isOpen}
          placeholder="--:--"
          addon={test}
        />
        <Triangle isActive={isOpen} up={isOpen} />
      </InputContainer>
    </Container>
  );
};

export default CustomTimePicker;
