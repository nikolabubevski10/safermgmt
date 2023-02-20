import React from 'react';
import { Story } from '@storybook/react';
import ClassButton from './ClassButton';
import { ICourse } from '../../../../../state/types';
import getDummyTeacher from '../../../../utils/getDummyTeacher';

export default {
  title: 'Attendance/components/Class Selection/components/Class Button',
  component: ClassButton,
  parameters: { controls: { sort: 'alpha' } },
};

interface IArgs {
  course: ICourse;
  courseName: string;
  isSelected: boolean;
  onClick: (course: ICourse) => void;
  rand: number;
}

const { courses } = getDummyTeacher(Math.floor(Math.random() * 10 + 1));
const course = courses[0];

const Template: Story<IArgs> = (args) => <ClassButton {...args} />;

export const NotSelected = Template.bind({});
NotSelected.args = {
  course,
  courseName: course.name,
  isSelected: false,
  onClick: () => undefined,
  rand: Math.random(),
};

export const IsSelected = Template.bind({});
IsSelected.args = {
  course,
  courseName: course.name,
  isSelected: true,
  onClick: () => undefined,
  rand: Math.random(),
};
