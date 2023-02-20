import React from 'react';
import { Story } from '@storybook/react';

import Amount, { Props } from './Amount';
import { FilterType } from 'domains/schoolBus/route-tracker/types';

export default {
  title: 'School Bus/Route Tracker/components/Filter/components/Amount',
  component: Amount,
  parameters: { controls: { sort: 'alpha' } },
};

const Template: Story<Props> = (args) => <Amount {...args} />;

export const Positive = Template.bind({});
Positive.args = {
  icon: 'check',
  number: 5,
  type: FilterType.Positive,
};

export const Negative = Template.bind({});
Negative.args = {
  icon: 'times',
  number: 3,
  type: FilterType.Negative,
};

export const Neutral = Template.bind({});
Neutral.args = {
  icon: 'check',
  number: 5,
  type: FilterType.Nutral,
};
