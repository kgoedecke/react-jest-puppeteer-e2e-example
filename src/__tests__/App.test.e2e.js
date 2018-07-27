const faker = require('faker');
const puppeteer = require('puppeteer');

describe('Todo List', () => {
  test('Can load todo list', async () => {
	let browser = await puppeteer.launch({
	  headless: false,
	  devtools: true,
	  slowMo: 250
	});
	let page = await browser.newPage();

	page.emulate({
	  viewport: {
		width: 500,
		height: 900
	  },
	  userAgent: ''
	});

	await page.goto('http://localhost:3000/');
	await page.waitForSelector('.todo_list');
	await page.click("input[name=todo_id_1]");

	browser.close();
  }, 9000000);
});
