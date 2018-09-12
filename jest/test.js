const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3004/';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
afterAll(() => {
  browser.close();
});

describe('Check the title', () => {
  beforeEach(async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
  });

  test('Current restaurant name is correct', async () => {
    var div = '#related-start span';
    const title = await page.$eval(div, e => e.textContent);
    expect(title).toEqual('More Places Near Trou Normand');
  });
});

describe('Check the divs', () => {
  beforeEach(async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
  });

  test('assert that a div named container exists', async () => {
    const navbar = await page.$eval('.container', el => (el ? true : false));
    expect(navbar).toBe(true);
  });

  test('assert that there are 6 divs with className container', async () => {
    const divsCounts = await page.$$eval('div.container', divs => divs.length);
    expect(divsCounts).toEqual(6);
  });

  test('assert that the hover function on the buttons works', async () => {
    await page.hover('.right-button');
    await page.hover('.left-button');
  });

  test('assert that the hover function on the container works', async () => {
    await page.hover('.container');
  });

  test('assert that wrapper div contains infoDiv and imgDiv', async () => {
    const data = await page.evaluate(() => {
      const tds = Array.from(document.querySelectorAll('.wrapper div'));
      return tds.map(td => td.className);
    });
    expect(data[0]).toEqual('imgDiv');
    expect(data[1]).toEqual('infoDiv');
  });

  test('assert that infoDiv contains titleDiv, summary, rating-group,rating, google-rating, and description divs', async () => {
    const data = await page.evaluate(() => {
      const tds = Array.from(document.querySelectorAll('.infoDiv div'));
      return tds.map(td => td.className);
    });
    expect(data[0]).toEqual('titleDiv');
    expect(data[1]).toEqual('summary');
    expect(data[2]).toEqual('rating-group');
    expect(data[3]).toEqual('rating');
    expect(data[4]).toEqual('google-rating');
    expect(data[5]).toEqual('description');
  });

  test('assert that imgDiv contains two svg buttons', async () => {
    const data = await page.evaluate(() => {
      const tds = Array.from(document.querySelectorAll('.imgDiv svg'));
      return tds.map(td => td.className);
    });
    expect(data.length / 6).toEqual(2);
  });
});
