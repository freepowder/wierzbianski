import type { Meta } from '@storybook/react';
import Video from "./video";

export default {
  component: Video,
  title: 'Components/Video',
  decorators: [
    (Story) => (
        <Story />
    )
  ],
} as Meta;


export const Primary = {
  args: {
    url: 'https://player.vimeo.com/video/189345383'
  },
};
