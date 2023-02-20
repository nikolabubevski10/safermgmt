import React from 'react';
import { Story } from '@storybook/react';

import Link, { Props } from './Link';

export default {
  title: 'Organization/Profile Completion/components/Table/components/Link',
  component: Link,
  parameters: { controls: { sort: 'alpha' } },
};

const Template: Story<Props> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Contact',
};
