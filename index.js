const chrome = require('selenium-webdriver/chrome');
const { Builder, By } = require('selenium-webdriver');
const { join } = require('path');

const cdPath = join(__dirname, '/chromedriverBin');
process.env.PATH = `${process.env.PATH}:${cdPath}`;

const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().windowSize({ width: 1200, height: 900}))
    .build();

driver.get('https://www.google.com')
    .then(() => driver.sleep(2000))
    .then(() => driver.findElement(By.css('[title="Search"]')).sendKeys('cat gifs'))
    .then(() => driver.sleep(1000))
    .then(() => driver.findElement(By.css('[aria-label="Google Search"]')).click())
    .then(() => driver.sleep(3000))
    .then(() => driver.close())
    .catch(err => console.log(err));