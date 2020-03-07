import { app } from './app'
import { createMtgDraft } from './commands/createMtgDraft'
import { health } from './health'

const runBolt = async () => {
  await app.start(process.env.PORT || 3000)
  console.log('⚡️ Bolt app is running!') // eslint-disable-line no-console
}

runBolt().then(() => {
  health()
  createMtgDraft()
})
