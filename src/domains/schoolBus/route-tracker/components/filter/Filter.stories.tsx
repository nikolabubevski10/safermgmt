import React from 'react';
import { Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import Filter, { Props } from './Filter';
import { FilterType } from '../../types';

export default {
  title: 'School Bus/Route Tracker/components/Filter',
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
  label: 'Total completed routes',
  type: FilterType.Positive,
};

export const Negative = Template.bind({});
Negative.args = {
  amount: 3,
  isChecked: true,
  icon: 'times',
  label: 'Total emergencies',
  type: FilterType.Negative,
};

export const Neutral = Template.bind({});
Neutral.args = {
  amount: 5,
  isChecked: true,
  icon: 'check',
  label: 'Label',
  type: FilterType.Nutral,
};
