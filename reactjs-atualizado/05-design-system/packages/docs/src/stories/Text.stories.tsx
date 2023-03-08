import type { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@ignite-ui/react';

export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni exercitationem minus error vel, magnam quod amet harum debitis itaque incidunt quas nisi voluptatibus quis ea earum qui vitae libero."
    },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong',
    }
}
