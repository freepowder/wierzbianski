import type { Meta } from '@storybook/react';
import Hero from "./hero";

export default {
  component: Hero,
  title: 'Sections/Hero',
  decorators: [
    (Story) => (
        <Story />
    )
  ],
} as Meta;


export const Primary = {
  args: {
    reelVideo:{  url: 'https://player.vimeo.com/video/189345383' ,
      title: '' },
    featured:[{  url: 'https://www.youtube.com/embed/-YjpTv3uRpk',
      title: '' },
      {  url: 'https://www.youtube.com/embed/-YjpTv3uRpk',
        title: '' }]
  },
};
