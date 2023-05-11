import type { Meta } from '@storybook/react';
import Services from "./services";

export default {
  component: Services,
  title: 'Sections/Services',
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
