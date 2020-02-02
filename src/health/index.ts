import { expressReceiver } from '../app'

export const health = () => {
  expressReceiver.app.get('/health', (_req, res) => {
    res.status(200).send('OK')
  })
}
