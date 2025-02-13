import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext } from '@playwright/test';

let browser: Browser;
let page: Page;
let context: BrowserContext;

Given('user who browses the Google search engine', async () => {
    browser = await chromium.launch({ headless: false, channel: 'chrome' });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://www.google.com.co");
});

Given('searches for {string}', async (productName) => {
    await page.mouse.move(Math.random() * 800, Math.random() * 800);
    await page.locator("xpath=//textarea[@title='Buscar']").fill(productName);
    await page.keyboard.press("Enter");
});

When('enters the option of the Mercado Libre website', async () => {
    await page.locator("xpath=//h3[contains(text(), 'Creatinas | MercadoLibre')]").click();
});

When('filters the products by the brand {string}', async (brandName) => {
    await page.close();
    await browser.close();
});

Then('validates the information of the first product', async () => {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});