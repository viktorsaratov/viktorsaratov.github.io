// Objectives:
// Use a request method to make API calls in order to grab responses. 
// Parse the API response and pass the response to browser's local storage in Playwright.
// Refactor API calls from utils folder and isolate them from Web Test Logic
// Create a session and store the session details.
// Use the Visual code debugging method to debug APIs
// Use route method to intercept Network Response Calls with Playwright.
// Write a Playwright script to intercept Network Request Calls
// Write a code to abort the Network calls using Playwright.


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
const ProductName = "Sauce Labs Backpack";
const products = page.locator("inventory_item_description");
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
const titles = await page.locator("inventory_item_description").allTextContents();
console.log(titles);
const count = await products.count();
for (let i = 0; i < count; i++) 
{
  if(await products.nth(i).locator("inventory-item-name").textContent() === ProductName);{
    await products.nth(i).locator("text=Add to cart").click();
    break;
  }
}
await page.locator('[data-test="shopping-cart-link"]').click();
const bool = page.locator("inventory_item_name").isVisible();
expect(bool).toBeTruthy();


//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
//   await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
//   await page.locator('[data-test="shopping-cart-link"]').click();
//   await page.locator('[data-test="checkout"]').click();
//   await page.locator('[data-test="firstName"]').click();
//   await page.locator('[data-test="firstName"]').fill('John');
//   await page.locator('[data-test="lastName"]').click();
//   await page.locator('[data-test="lastName"]').fill('Doe');
//   await page.locator('[data-test="postalCode"]').click();
//   await page.locator('[data-test="postalCode"]').fill('12345');
//   await page.locator('[data-test="continue"]').click();
//   await page.locator('[data-test="finish"]').click();
//   await page.locator('[data-test="back-to-products"]').click();
});