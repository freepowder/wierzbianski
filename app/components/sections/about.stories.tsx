import type { Meta } from '@storybook/react';
import About from "./about";

export default {
  component: About,
  title: 'Sections/About',
  decorators: [
    (Story) => (
        <Story />
    )
  ],
} as Meta;


export const Primary = {
  args: {
  },
};
