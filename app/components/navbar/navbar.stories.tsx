import type { Meta } from '@storybook/react';
import Navbar from "./Navbar";

export default {
  component: Navbar,
  title: 'Components/Navbar',
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
