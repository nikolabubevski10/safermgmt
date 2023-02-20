import React from 'react';
import { Story } from '@storybook/react';

import Amount, { Props } from './Amount';

export default {
  title: 'AttendanceDashboard/components/Amount',
  component: Amount,
  parameters: { controls: { sort: 'alpha' } },
};

const Template: Story<Props> = (args) => <Amount {...args} />;

export const Positive = Template.bind({});
Positive.args = {
  icon: 'check',
  number: 5,
  type: 'positive',
};

export const Negative = Template.bind({});
Negative.args = {
  icon: 'times',
  number: 3,
  type: 'negative',
};
