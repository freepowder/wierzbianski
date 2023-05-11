import type { Meta } from '@storybook/react';
import Footer from "./footer";

export default {
  component: Footer,
  title: 'Components/Footer',
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
