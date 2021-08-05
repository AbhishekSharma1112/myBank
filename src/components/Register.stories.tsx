import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Register } from './Register';

export default {
  title: 'Example/Page',
  component: Register,
} as ComponentMeta<typeof Register>;

const Template: ComponentStory<typeof Register> = (args) => <Register {...args} />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   ...HeaderStories.LoggedIn.args,
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {
//   ...HeaderStories.LoggedOut.args,
// };
