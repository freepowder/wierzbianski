import type { Meta } from '@storybook/react';
import VideoCard from "./video-card";

export default {
  component: VideoCard,
  title: 'Components/Video Card',
  decorators: [
    (Story) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24">
        <Story />
        </div>
    )
  ],
} as Meta;


export const Primary = {
  args: {
    url: 'https://player.vimeo.com/video/189345383',
    title:'some title',
  },
};
