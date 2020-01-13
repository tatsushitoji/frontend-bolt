import { app } from './app'
import { createMtgDraft } from './commands/createMtgDraft'

const runBolt = async () => {
  await app.start(process.env.PORT || 3000)
  console.log('⚡️ Bolt app is running!')
}

runBolt().then(createMtgDraft)
