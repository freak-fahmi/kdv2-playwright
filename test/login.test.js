const { test, expect } = require("@playwright/test");

test.beforeEach (async ({ page }) => {
  await page.goto("/signin")
})

test("Login KDV2", async ({ page }) => {
  await page.click ("text=Masuk");
  await page.fill ("id=auth-form_phoneNumber",'85694682054')
  await page.click ("text=Lanjut")
  await 
  page.fill ('input[aria-label="Please enter verification code. Digit 1"]','0')
  page.fill ('input[aria-label="Digit 2"]','3')
  page.fill ('input[aria-label="Digit 3"]','1')
  page.fill ('input[aria-label="Digit 4"]','0')
  page.fill ('input[aria-label="Digit 5"]','9')
  page.fill ('input[aria-label="Digit 6"]','3')
  await page.click ("text=Masuk")
  // await expect(page).toHaveTitle('Home | KlikDokter');
});
