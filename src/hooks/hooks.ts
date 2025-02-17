import { After, AfterAll, Before, BeforeAll, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser: Browser;
let context: BrowserContext;

setDefaultTimeout(20000)

BeforeAll(async () => {
    browser = await chromium.launch({
        headless: false,
        channel: 'chrome',
        args: [
          '--disable-blink-features=AutomationControlled',
          '--start-maximized',
          '--no-sandbox',
        ]
    });
});

Before(async () => {
    context = await browser.newContext();
    await context.clearCookies(); 
    const page = await context.newPage();
    pageFixture.page = page;
});

After(async function ({ pickle, result }) {
    if (result.status == Status.FAILED) {
        const img = await pageFixture.page.screenshot({ path: `test-results/screenshots/${pickle.name}.png`, type: `png` });
        this.attach(img, "image/png");
    }
    await pageFixture.page.close();
    await context.close();
});

AfterAll(async () => {
    await browser.close();
});