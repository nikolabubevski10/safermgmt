import React from 'react'
import { Story } from '@storybook/react'
import DigitalIdCards from './DigitalIdCards'

export default {
    title: 'splash/DigitalIdCards',
    component: DigitalIdCards
}

const Template: Story = (args) => <DigitalIdCards {...args} />

export const Default = Template.bind({})
Default.args = {}