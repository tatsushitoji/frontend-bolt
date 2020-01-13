import { app } from '../../app'
import { createDraft } from './createDraft'

export const createMtgDraft = () => {
  app.command('/create_mtg_draft', async ({ say, ack }) => {
    ack()
    say(`wait a minutes! Now drafting… :hammer_and_wrench:`)
    const draftURL = await createDraft()
    say(`Here is the today's meeting draft :memo: \n ${draftURL}`)
  })
}
