import React from 'react';
import { Story } from '@storybook/react';

import Header from './Header';

export default {
  title: 'Attendance/components/Header',
  component: Header,
  parameters: { controls: { sort: 'alpha' } },
};

interface IArgs {
  openExitModal: () => void;
  showTime?: boolean;
}

const Template: Story<IArgs> = (args) => <Header {...args} />;

export const WithTime = Template.bind({});
WithTime.args = {
  openExitModal: () => undefined,
  showTime: true,
};

export const WithoutTime = Template.bind({});
WithoutTime.args = {
  openExitModal: () => undefined,
  showTime: false,
};
