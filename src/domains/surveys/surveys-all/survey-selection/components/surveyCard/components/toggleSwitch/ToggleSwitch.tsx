import React from 'react';
import { Container, Circle } from './ToggleSwitchStyles';

interface Props {
  isOn: boolean;
  onClick: () => void;
}

const ToggleSwitch: React.FC<Props> = ({ isOn, onClick }: Props) => {
  return (
    <Container isOn={isOn} onClick={onClick}>
      <Circle isOn={isOn} />
    </Container>
  );
};

export default ToggleSwitch;
