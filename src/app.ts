import { App, ExpressReceiver } from '@slack/bolt'

export const expressReceiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET || '',
  endpoints: {
    events: '/slack/events',
    commands: '/slack/commands',
  },
})

export const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: expressReceiver,
})
