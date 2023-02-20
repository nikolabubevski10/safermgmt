import React from 'react';
import { Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import Filter, { Props } from './Filter';

export default {
  title: 'AttendanceDashboard/components/Filter',
  component: Filter,
  parameters: { controls: { sort: 'alpha' } },
};

const Template: Story<Props> = (args) => {
  const [, updateArgs] = useArgs();

  const handleClick = () => {
    updateArgs({ ...args, isChecked: !args.isChecked });
  };

  return <Filter {...args} onClick={handleClick} />;
};

export const Positive = Template.bind({});
Positive.args = {
  amount: 5,
  isChecked: true,
  icon: 'check',
  label: 'Total completed profiles',
  type: 'positive',
};

export const Negative = Template.bind({});
Negative.args = {
  amount: 3,
  isChecked: true,
  icon: 'times',
  label: 'Total incompleted profiles',
  type: 'negative',
};

export const Neutral = Template.bind({});
Neutral.args = {
  amount: 5928,
  isChecked: true,
  icon: 'check',
  label: 'Label',
  type: 'neutral',
};
