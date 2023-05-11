import type { Meta } from '@storybook/react';
import VideoEdit from "./video-edit";

export default {
  component: VideoEdit,
  title: 'Components/Video Edit',
  decorators: [
    (Story) => (
        <div className="w-1/2 bg-[#323232]">
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
