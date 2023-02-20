import React, { useState } from 'react';
import { Switch, Slider, Input } from './ToggleStyles';

interface Props {
  value?: boolean;
  onClick?: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  ) => void;
}

const Toggle: React.FC<Props> = ({ value }: Props) => {
  const [checked, setChecked] = useState(value);

  return (
    <Switch>
      <Input
        checked={checked}
        onChange={() => setChecked(!checked)}
        type="checkbox"
      />
      <Slider />
    </Switch>
  );
};

export default Toggle;
