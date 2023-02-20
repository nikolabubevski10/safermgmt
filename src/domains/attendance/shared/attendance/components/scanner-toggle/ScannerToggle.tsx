import React from 'react';

import { Container, LabelText, Slider } from './ScannerToggleStyles';

interface Props {
  small?: boolean;
  toggle: () => void;
  valueIndex: 0 | 1;
  values: string[];
}

const ScannerToggle: React.FC<Props> = ({
  small = false,
  toggle,
  valueIndex,
  values,
}: Props) => {
  const value1 = values[0] || '';
  const value2 = values[1] || '';
  const value1IsSelected = valueIndex === 0;
  const value2IsSelected = valueIndex === 1;

  return (
    <Container onClick={toggle} small={small}>
      <LabelText small={small} isSelected={value1IsSelected}>
        {value1}
      </LabelText>
      <LabelText small={small} isSelected={value2IsSelected}>
        {value2}
      </LabelText>
      <Slider small={small} position={valueIndex} />
    </Container>
  );
};

export default ScannerToggle;
