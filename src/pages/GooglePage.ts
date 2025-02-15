import { Locator, Page } from "@playwright/test";
import { GooglePageLocators } from "./Locators";

export class GooglePage {
    readonly page: Page;
    readonly inputSearch: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputSearch = page.locator(GooglePageLocators.INPUT_SEARCH);
    }

    async openGoogle() {
        await this.page.goto("https://www.google.com/", { waitUntil: 'load' });
    }

    async searchWord (wordToSearch: string) {
        await this.inputSearch.fill(wordToSearch);
        await this.page.keyboard.press('Enter');
    }

    async clickLink (nameLink: string) {
        await this.page.locator(GooglePageLocators.OPTION_LINK.replace('%1$s', nameLink)).click();
    }

    async humanActions () {
        const action = Math.random() > 0.5 ? 'move' : 'click';
        if (action === 'move') {
            await this.page.mouse.move(Math.random() * 800, Math.random() * 800);
        } else {
            await this.page.mouse.click(Math.random() * 1000, Math.random() * 1000);
        }
    }

    async implicitWait () {
        const value = Math.random() * 2000 + 500;
        await this.page.waitForTimeout(value); 
    }
}