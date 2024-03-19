import type { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from "../components/MyLabel";

const meta = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: { control: 'select' }
    }
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Basic Label'
    }
}

export const Secondary: Story = {
    args: {
        label: 'Secondary Label',
        size: 'h2',
        color: 'text-secondary'
    }
}

export const AllCaps: Story = {
    args: {
        label: 'AllCaps Label',
        size: 'h1',
        AllCaps: true
    }
}

export const CustomColor: Story = {
    args: {
        label: 'CustomColor Label',
        size: 'h1',
        fontColor: '#FE3E43'
    }
}

export const BackgroundColor: Story = {
    args: {
        label: 'BackgroundColor Label',
        size: 'h1',
        fontColor: '#FE3E43',
        backgroundColor: 'black'
    }
}