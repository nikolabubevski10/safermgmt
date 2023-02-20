import React from 'react';
import { Story } from '@storybook/react';
import Card from './Card';
import cards from '../../assets/demoCards/cards';
import avatar1 from '../../assets/demoCards/avatars/avatar1.png';
import { Props } from './Card';

const card1 = cards[0] || {};

export default {
  title: 'splash/surveys/Card',
  component: Card,
};

const Template: Story<Props> = (args: Props) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatarSrc: avatar1,
  questionList: card1.questionList,
  title: card1.title,
};
