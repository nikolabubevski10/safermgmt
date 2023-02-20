import React from 'react';
import { Story } from '@storybook/react';

import Attendance from './Attendance';

export default {
  title: 'Attendance/components/Attendance',
  component: Attendance,
  parameters: { controls: { sort: 'alpha' } },
};

interface IArgs {
  name: string;
}

const Template: Story<IArgs> = (args) => (
  <Attendance header={'Header'} subHeader={'SubHeader'} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Algebra 120',
};
