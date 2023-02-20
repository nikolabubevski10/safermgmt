import React from 'react';
import { Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import ScannerToggle from './ScannerToggle';

export default {
  title: 'Attendance/components/Attendance/components/Scanner Toggle',
  component: ScannerToggle,
  parameters: { controls: { sort: 'alpha' } },
};

interface IArgs {
  small?: boolean;
  toggle: () => void;
  valueIndex: 0 | 1;
  values: string[];
}

const Template: Story<IArgs> = (args) => {
  const [, updateArgs] = useArgs();

  const handleToggle = () => {
    updateArgs({ ...args, valueIndex: args.valueIndex === 0 ? 1 : 0 });
  };

  return <ScannerToggle {...args} toggle={handleToggle} />;
};

export const Default = Template.bind({});
Default.args = {
  small: false,
  valueIndex: 0,
  values: ['QR Code', 'Face Scan'],
};

export const Small = Template.bind({});
Small.args = {
  small: true,
  valueIndex: 0,
  values: ['QR Code', 'Face Scan'],
};
