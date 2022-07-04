import { PlaywrightTestConfig } from "@playwright/test";


const config: PlaywrightTestConfig = {

    use: {
        viewport: null,
        headless: !true,
        // browserName: "chromium",
        screenshot: "on",
        // video: "on",
        trace: "retain-on-failure",
        baseURL: "https://v2.klikdokter-stg.com",
        // baseURL: "https://dev107189.service-now.com/api/now/table/incident",
        // extraHTTPHeaders: {
        //     "Authorization": "Basic YWRtaW46U0NxN2pDb2tDbFI4"
        // }
        // baseURL: "https://letcode.in",
        // contextOptions: {
        //     permissions: ["clipboard-read"]
        // }
        // ,
        // launchOptions: {
        //     args: ["--start-maximized"],
            // logger: {
            //     // isEnabled: (name, severity) => true,
            //     // log: (name, severity, message, args) => console.log(name, severity)
            // }
        },
    // },
    timeout: 60000,
    // grep: [new RegExp("@smoke"), new RegExp("@reg")],
    // testMatch: ["test/login.test.js"],
    testDir : "./test",
    retries: 0,
    // reporter: "./customReport/myReporter.ts"
    reporter: [
        ["dot"], // -> console
        ["json", { outputFile: "test-result.json" }], //  -> JSON
        ['experimental-allure-playwright']
        // ['html', {
        //     open: "never"
        // }] // -> HTML
    ],
    // globalTeardown: './helper/globalsetup.ts'
}
export default config;