import type { Meta } from '@storybook/react';
import Contact from "./contact";

export default {
  component: Contact,
  title: 'Sections/Contact',
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
