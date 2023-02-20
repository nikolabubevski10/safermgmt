import React from 'react';
import { Container, Slider, SliderContainer } from './SliderSelectorStyles';
import Option from './components/option/Option';

interface Props {
  positionIndex: number;
  options: {
    label: string;
    value: string;
  }[];
  onClick: React.MouseEventHandler;
}

const SliderSelector: React.FC<Props> = ({
  positionIndex,
  options,
  onClick,
}: Props) => {
  return (
    <Container>
      {options.map((_, i) => (
        <Option options={options} i={i} key={i} onClick={onClick} />
      ))}
      <SliderContainer>
        <Slider optionCount={options.length} positionIndex={positionIndex} />
      </SliderContainer>
    </Container>
  );
};

export default SliderSelector;
