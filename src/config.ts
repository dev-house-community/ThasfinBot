import { Options } from 'tmi.js';

const config : Options = {
  identity: {
    username: 'thasfinbot',
    password: process.env.TOKEN,
  },
  channels: ['jakeliny']
  };

export default config;