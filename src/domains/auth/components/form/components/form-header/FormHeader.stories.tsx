import React from 'react';
import { Story } from '@storybook/react';
import styled from 'styled-components';

import FormHeader from './FormHeader';
import Heading from '../../../heading';
import Paragraph from '../../../paragraph';

const ParagraphContainer = styled.div`
  margin-top: 10px;
`;

export default {
  title: 'Auth/components/form/components/Form Header',
  component: FormHeader,
};

interface IArgs {
  children: React.ReactNode;
}

const Template: Story<IArgs> = (args) => <FormHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Heading>Log In</Heading>
      <ParagraphContainer>
        <Paragraph>Enter your details below</Paragraph>
      </ParagraphContainer>
    </>
  ),
};
