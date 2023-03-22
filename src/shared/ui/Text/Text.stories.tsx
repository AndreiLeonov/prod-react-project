import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Text',
    text: 'Description',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Text',
    text: 'Description',
    theme: TextTheme.ERROR,
};

export const WithOnlyTitle = Template.bind({});
WithOnlyTitle.args = {
    title: 'Text',
};

export const WithOnlyText = Template.bind({});
WithOnlyText.args = {
    text: 'Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Text',
    text: 'Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithOnlyTitleDark = Template.bind({});
WithOnlyTitleDark.args = {
    title: 'Text',
};
WithOnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithOnlyTextDark = Template.bind({});
WithOnlyTextDark.args = {
    text: 'Text',
};
WithOnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
