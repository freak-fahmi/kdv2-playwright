import {chromium} from "playwright";
const { test, expect } = require("@playwright/test");

test.beforeEach (async ({ page }) => {
  await page.goto("/")
})

// describe('Launch Browser',() => {
     test('Tanya Dokter', async({page}) => {
//         const Browser = await chromium.launch({
//             headless: false
//         })
//         const context = await Browser.newContext();
//         const page = await context.newPage();
        
//         // Go to https://v2.klikdokter-stg.com/
//         await page.goto('https://v2.klikdokter-stg.com/');
//         // Click header >> text=Tanya Dokter
        await Promise.all([
          page.waitForNavigation(/*{ url: 'https://v2.klikdokter-stg.com/tanya-dokter' }*/),
          page.locator('header >> text=Tanya Dokter').click()
        ]);
        // Click [placeholder="Semua Lokasi"]
        await page.locator('[placeholder="Semua Lokasi"]').click();
        // Fill [placeholder="Semua Lokasi"]
        await page.locator('[placeholder="Semua Lokasi"]').fill('bogor');
        // Click text=Kota bogor
        await page.locator('text=Kota bogor').click();
        // Click button:has-text("Cari")
        await Promise.all([
          page.waitForNavigation(/*{ url: 'https://v2.klikdokter-stg.com/tanya-dokter/list?q=&suggestion=&location=Kota+Bogor&page=1&type=&price=&experience=' }*/),
          page.locator('button:has-text("Cari")').click()
        ]);
        // await Browser.close()
      });
