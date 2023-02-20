import React from 'react';
import { Story } from '@storybook/react';

import Status, { Props } from './Status';

export default {
  title: 'Organization/Profile Completion/components/Table/components/Status',
  component: Status,
  parameters: { controls: { sort: 'alpha' } },
};

const Template: Story<Props> = (args) => <Status {...args} />;

export const Positive = Template.bind({});
Positive.args = {
  status: true,
};

export const Negative = Template.bind({});
Negative.args = {
  status: false,
};
