import React from 'react';
import { Story } from '@storybook/react';

import ExitModal from './ExitModal';

export default {
  title: 'Attendance/components/Exit Modal',
  component: ExitModal,
  parameters: { controls: { sort: 'alpha' } },
};

interface IArgs {
  onClose: () => void;
  shouldShow: boolean;
}

const Template: Story<IArgs> = (args) => <ExitModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClose: () => undefined,
  shouldShow: true,
};
