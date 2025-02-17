export enum GooglePageLocators {
    INPUT_SEARCH = "xpath=//form//textarea",
    OPTION_LINK = "xpath=//h3[contains(text(), '%1$s')]",
}

export enum MercadoLibrePageLocators {
    SECTION_COOKIES = "xpath=//div[@class='cookie-consent-banner-opt-out__container']",
    BUTTON_ACCEPT_COOKIES = "xpath=//div[@class='cookie-consent-banner-opt-out__container']//div[2]//button[1]",
    BUTTON_SHOW_MORE_BRANDS = "xpath=//section[@class='ui-search-filter-groups']//div[4]//ul//a[@title='Mostrar más']",
    SPAN_PRODUCT_LIST_PRICE = "xpath=//section[contains(@class, 'ui-search-results')]//ol//li[%1$s]//div[@class='poly-content']//div[@class='poly-component__price']//div[@class='poly-price__current']//span[@aria-roledescription='Monto']//span[2]",
    SPAN_PRODUCT_DETAIL_PRICE = "xpath=//div[@class='ui-pdp-price__second-line']//span[@aria-roledescription='Precio']//span[@class='andes-money-amount__fraction']",
    OPTION_PRODUCT = "xpath=//section[contains(@class, 'ui-search-results')]//ol//li[%1$s]",
    OPTION_BRAND_FILTER = "xpath=//a[@title='%1$s']",
}