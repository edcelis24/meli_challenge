import { expect, Locator, Page } from "@playwright/test";
import { MercadoLibrePageLocators } from "./Locators";

export class MercadoLibrePage {
    readonly page: Page;
    readonly sectionCookies: Locator;
    readonly buttonAcceptCookies: Locator;
    readonly buttonShowMoreBrands: Locator;
    readonly spanProductListPrice: Locator;
    readonly optionProduct: Locator;
    readonly spanProductDetailPrice: Locator;
    private productListPrice: string;

    constructor (page: Page){
        this.page = page;
        this.sectionCookies = page.locator(MercadoLibrePageLocators.SECTION_COOKIES);
        this.buttonAcceptCookies = page.locator(MercadoLibrePageLocators.BUTTON_ACCEPT_COOKIES);
        this.buttonShowMoreBrands = page.locator(MercadoLibrePageLocators.BUTTON_SHOW_MORE_BRANDS);
        this.spanProductDetailPrice = page.locator(MercadoLibrePageLocators.SPAN_PRODUCT_DETAIL_PRICE);
    }

    async acceptCookies() {
        if (await this.sectionCookies.isVisible({ timeout: 5000 })) {
            await this.buttonAcceptCookies.click();
        }
    }

    async applyBrandFilter(productBrand: string) {
        await this.buttonShowMoreBrands.click();
        await this.page.locator(MercadoLibrePageLocators.OPTION_BRAND_FILTER.replace("%1$s", productBrand)).click({ timeout: 5000 });
    }

    async seeProductListInformation(numberProduct: string) {
        this.productListPrice = await this.page.locator(MercadoLibrePageLocators.SPAN_PRODUCT_LIST_PRICE.replace("%1$s", numberProduct)).innerText();
        await this.page.locator(MercadoLibrePageLocators.OPTION_PRODUCT.replace("%1$s", numberProduct)).click();
    }

    async validatePriceEquality() {
        await expect(this.spanProductDetailPrice).toHaveText(this.productListPrice);
    }
}