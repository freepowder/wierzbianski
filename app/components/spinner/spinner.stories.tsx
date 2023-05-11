import type { Meta } from '@storybook/react';
import Spinner from "./spinner";

export default {
  component: Spinner,
  title: 'Components/Spinner',
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
