import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';
import { GooglePage } from '../../pages/GooglePage';
import { MercadoLibrePage } from '../../pages/MercadoLibrePage';

let googlePage: GooglePage;
let meliPage: MercadoLibrePage; 

Given('that the user is on the Google search engine', async () => {
    googlePage = new GooglePage(pageFixture.page);
    await googlePage.openGoogle();
    await googlePage.implicitWait();
    await googlePage.humanActions();
});

Given('searches for {string}', async (wordToSearch) => {
    await googlePage.searchWord(wordToSearch);
    await googlePage.implicitWait();
});

When('the user clicks on the link {string}', async (nameLink) => {
    await googlePage.clickLink(nameLink);
    await googlePage.implicitWait();
});

When('applies the filter for the brand {string}', async (productBrand) => {
    meliPage = new MercadoLibrePage(pageFixture.page);
    await meliPage.acceptCookies();
    await meliPage.applyBrandFilter(productBrand);
    await googlePage.implicitWait();
});

Then('the user should see the {string} product of that brand', async (numberProduct) => {
    await meliPage.seeProductListInformation(numberProduct);
    await googlePage.implicitWait();
});

Then('validate the price of the first product', async () => {
    await meliPage.validatePriceEquality();
});