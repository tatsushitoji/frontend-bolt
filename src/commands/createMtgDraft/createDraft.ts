import puppeteer from 'puppeteer'

export const createDraft = async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
  })
  const page = await browser.newPage()
  await page.goto('https://hackmd.io/login')
  await page.type('input[name="email"]', process.env.MAIL_ADRESS as string)
  await page.type('input[name="password"]', process.env.PASSWORD as string)
  await page.click('#login > .user-container > .form-horizontal > div > .btn')
  await page.waitForNavigation()

  await page.goto(
    'https://hackmd.io/?nav=overview&template=3f8f6b87-807f-40c7-a49c-3dcc9ded007b'
  )
  const button = await page.waitForSelector(
    '.modal-body > .row > .col-sm-4 > .ui-templates-container > .btn-primary',
    { visible: true }
  )
  await button.click()
  await page.waitForNavigation()
  await page.waitForSelector('h1#フロントエンドMTG', { visible: true })

  const pageURL = page.url()
  await browser.close()
  return pageURL
}
