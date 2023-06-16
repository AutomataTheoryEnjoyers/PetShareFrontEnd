const puppeteer = require("puppeteer")
let browser;
let page;
let url = "http://127.0.0.1:3000";
let TIMEOUT = 30000


function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done")
    }, ms)
  })
}

function getErrors(errorSelectors) {
  const errorList = document.querySelectorAll(errorSelectors)
  if (errorList.length > 0) {
    return [...errorList].map(error => error.textContent)
  }

  return []
}

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 70,
  })

  page = await browser.newPage();

  await page.goto(url)
})

afterAll(async () => {
  await browser.close()
})

describe('PetCreation', () => {
  const email = "sigmabatemanshelter110@gmail.com"
  const password = "Sigmacode1!"
  const petName = "kitke"
  const species = "Kot"
  const breed = "Młot"
  const description = "fajny koteczek"

  const signInSelector = ".sc-beqWaB";
  const signInAuthSelector = "div._alternate-action p > a";
  const usernameSelector = "#username";
  const passwordSelector = "#password";
  const continueButtonSelector = "button";

  const nameInputSelector = "#name-input"
  const speciesInputSelector = "#species-input"
  const breedInputSelector = "#breed-input"
  const descriptionInputSelector = "#description-input"
  const submitButtonSelector = "div#submit > button"
  const navSelector = "nav > div > a"
  const petTitleSelector = "a > div > div >h1"


  it('Should register a user', async () => {
    // go to sign in page
    await page.click(signInSelector);
    await page.waitForSelector(signInAuthSelector);

    await page.type(usernameSelector, email);
    await page.type(passwordSelector, password);
    await (await page.$$(continueButtonSelector))[2].click();

    await delay(3000)

    await (await page.$$(navSelector))[3].click()

    await page.waitForSelector(nameInputSelector);
    await page.type(nameInputSelector, petName)
    await page.type(speciesInputSelector, species)
    await page.type(breedInputSelector, breed)
    await page.type(descriptionInputSelector, description)
    await page.click(submitButtonSelector);

    await delay(3000)

    await (await page.$$(navSelector))[2].click()

    await delay(3000)

    const selectorTexts = await page.$$eval(petTitleSelector, pets => pets.map(pet => pet.textContent))
    expect(selectorTexts.filter(t => t == petName).length).toBeTruthy()
  }, 1000000)
});
