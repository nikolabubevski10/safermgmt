import React from 'react';
import { Story } from '@storybook/react';

import ClassCheckIn from './ClassCheckIn';
import getDummyTeacher from './utils/getDummyTeacher';

export default {
  title: 'Attendance',
  component: ClassCheckIn,
  parameters: { controls: { sort: 'alpha' } },
};

const teacher = getDummyTeacher(Math.floor(Math.random() * 10 + 1));

const Template: Story = (args) => <ClassCheckIn {...args} />;

export const Default = Template.bind({});
Default.args = {
  teacher,
};
