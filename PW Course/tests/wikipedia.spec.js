const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');

test('Search for "Playwright" on Wikipedia', async () => {
    // Launch the browser
    const browser = await chromium.launch();

    // Create a new context and page
    const context = await browser.newContext();
    const page = await context.newPage();

    // Go to Wikipedia homepage
    await page.goto('https://www.wikipedia.org/');

    // Select English language
    await page.click('#js-link-box-en');

    // Type "Playwright" in the search bar and press enter
    await page.fill('#searchInput', 'Playwright');
    await page.press('#searchInput', 'Enter');

    // Wait for the search results to load
    await page.waitForLoadState();

    // Perform assertions
    const pageTitle = await page.title();
    expect(pageTitle).toContain('Playwright');

    // Close the browser
    await browser.close();
});
