// const { test, expect } = require('@playwright/test');

// test.describe('Should verify functionality of the login page', () => {
//     test.beforeEach(async ({ page }) => {
//         // const browser = await chromium.launch();
//         // const context = await browser.newContext();
//         // page = await context.newPage();

//         // Go to https://www.saucedemo.com/
//         await page.goto('https://www.saucedemo.com/');

//         // Input standard_user as the username
//         await page.fill('#user-name', 'standard_user');

//         // Input secret_sauce as the password
//         await page.fill('#password', 'secret_sauce');

//         // Click the login button
//         await page.click('#login-button');
//     });
    
//     test('should add one of every product to the shopping cart', async ({ page }) => {
//         // Add one of every product to the shopping cart
//         const productButtons = await page.$$('.btn_inventory');
//         for (const button of productButtons) {
//             await button.click();
//         }
//     });
//     test('should verify the checkout process', async ({ page }) => {
//         // Click the shopping cart button
//         await page.click('.shopping_cart_link');

//         // Click the checkout button
//         await page.click('#checkout');

//         // Enter John as the first name
//         await page.fill('#first-name', 'John');

//         // Enter Doe as the last name
//         await page.fill('#last-name', 'Doe');

//         // Enter 12345 as the postal code
//         await page.fill('#postal-code', '12345');

//         // Click the finish button
//         await page.click('#finish');

//         // Click the back home button
//         await page.click('#back-to-products');

//         const browser = await page.context().browser();
//         await browser.close();
//     });
// });

// test.describe('Select Login button Element', () => {
//     test.beforeEach(async ({ page }) => {
//         const browser = await chromium.launch();
//         const context = await browser.newContext();
//         page = await context.newPage();
//         await page.goto('https://www.saucedemo.com/');
//     });

//     test('Should verify the Login button web element', async ({ page }) => {
//         const buttonElement = await page.$$('#login-button')[2];
//         await expect(await buttonElement.isVisible()).toBeTruthy();
//     });

//     test.afterEach(async ({ page }) => {
//         const browser = await page.context().browser();
//         await browser.close();
//     });
// });