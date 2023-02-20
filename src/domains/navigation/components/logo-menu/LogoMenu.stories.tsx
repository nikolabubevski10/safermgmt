import React, { useState } from 'react';
import { Story } from '@storybook/react';
import LogoMenu from './LogoMenu';
import { ISchool } from '../../state/types';

export default {
  title: 'navigation/logoMenu',
  component: LogoMenu,
};

interface Props {
  schools: ISchool[];
}

const [isOpen, setIsOpen] = useState(false);
const [currentSchoolId, setCurrentSchoolId] = useState<string | null>(null);

const Template: Story<Props> = ({ schools }: Props) => (
  <LogoMenu
    currentSchoolId={currentSchoolId}
    handleSchoolClick={setCurrentSchoolId}
    schools={schools}
    isOpen={isOpen}
    setIsOpen={setIsOpen}
  />
);

export const OneSchool = Template.bind({});
OneSchool.args = {
  schools: [
    {
      name: 'Mill Run Elementary School',
      id: '231314314314',
      status: 'success',
    },
  ],
};

export const TwoSchools = Template.bind({});
TwoSchools.args = {
  schools: [
    {
      name: 'Mill Run Elementary School',
      id: '231314314314',
      status: 'success',
    },
    {
      name: 'EagleRidgeMiddleSchool',
      id: '323235458924825',
      status: 'success',
    },
  ],
};

export const AFewSchools = Template.bind({});
AFewSchools.args = {
  schools: [
    {
      name: 'Mill Run Elementary School',
      id: '231314314314',
      status: 'success',
    },
    {
      name: 'EagleRidgeMiddleSchool',
      id: '323235458924825',
      status: 'success',
    },
    {
      name: 'Greenfield Grammar School',
      id: '323235458924825',
      status: 'success',
    },
    {
      name: 'Lone Oak School',
      id: '323235458924825',
      status: 'success',
    },
    {
      name: 'River Valley Institute',
      id: '323235458924825',
      status: 'success',
    },
    {
      name: 'Hill Valley High School',
      id: '323235458924825',
      status: 'success',
    },
  ],
};
