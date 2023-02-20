import React from 'react';
import { Story } from '@storybook/react';

import Link, { Props } from './Link';

export default {
  title: 'School Bus/Route Tracker/components/Table/components/Link',
  component: Link,
  parameters: { controls: { sort: 'alpha' } },
};

const Template: Story<Props> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Map',
};
