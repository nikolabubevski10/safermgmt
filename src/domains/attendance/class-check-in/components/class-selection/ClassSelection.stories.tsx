import React from 'react';
import { Story } from '@storybook/react';

import ClassSelection from './ClassSelection';
import { ICourse } from '../../../state/types';
import getDummyTeacher from '../../utils/getDummyTeacher';

export default {
  title: 'Attendance/components/Class Selection',
  component: ClassSelection,
  parameters: { controls: { sort: 'alpha' } },
};

interface IArgs {
  courses: ICourse[];
  handleClassSelection: (course: ICourse | null) => void;
}

const { courses } = getDummyTeacher(Math.floor(Math.random() * 10 + 1));

const Template: Story<IArgs> = (args) => (
  <ClassSelection isReauthenticated={false} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  courses,
  handleClassSelection: () => undefined,
};
