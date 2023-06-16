const puppeteer = require("puppeteer")
let browser;
let page;
let url = "http://127.0.0.1:3000/public/index.html";
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

describe('ShelterCreation', () => {
  const email = "sigmabatemanshelter120@gmail.com"
  const password = "Sigmacode1!"
  const username = "sigmabatemanshelter12"
  const phoneNumber = "123123123"
  const street = "based street"
  const city = "sigmaville"
  const province = "batemany"
  const postalCode = "12-123"
  const country = "chad"
  const fullShelterName = "Based Shelter"

  const signInSelector = ".sc-beqWaB";
  const signInAuthSelector = "div._alternate-action p > a";
  const emailSelector = "#email";
  const passwordSelector = "#password";
  const continueButtonSelector = "form > div > button";
  const acceptButtonSelector = "form > div > button";

  const registrationUsernameInputSelector = "#username-input";
  const registrationEmailInputSelector = "#email-input";
  const registrationPhoneNumberInputSelector = "#phone-number-input";
  const registrationAddressStreetInputSelector = "#address-input-street";
  const registrationAddressCityInputSelector = "#address-input-city";
  const registrationAddressProvinceInputSelector = "#address-input-province";
  const registrationAddressCodeInputSelector = "#address-input-postal-code";
  const registrationAddressCountryInputSelector = "#address-input-country";
  const registrationSubmitSelector = "div#submit > button";
  const registerSelectShelterSelector = "#role-radio-button-shelter-input"
  const registerFullShelterNameSelector = "#shelter-input"

  const finalSelector = ".sc-ehsgIH";

  it('Should register a user', async () => {
    // go to sign in page
    await page.click(signInSelector);
    await page.waitForSelector(signInAuthSelector);

    // go to create new account
    await page.click(signInAuthSelector)

    await page.waitForSelector(emailSelector);
    await page.type(emailSelector, email);
    await page.type(passwordSelector, password);
    await page.click(continueButtonSelector);
    await page.waitForSelector(acceptButtonSelector);
    await page.click(acceptButtonSelector);

    // in app registration
    await page.waitForSelector(registrationUsernameInputSelector)

    await page.click(registerSelectShelterSelector)
    await page.type(registrationUsernameInputSelector, username)
    await page.type(registerFullShelterNameSelector, fullShelterName)
    await page.type(registrationEmailInputSelector, email)
    await page.type(registrationPhoneNumberInputSelector, phoneNumber)
    await page.type(registrationAddressStreetInputSelector, street)
    await page.type(registrationAddressCityInputSelector, city)
    await page.type(registrationAddressProvinceInputSelector, province)
    await page.type(registrationAddressProvinceInputSelector, province)
    await page.type(registrationAddressCodeInputSelector, postalCode)
    await page.type(registrationAddressCountryInputSelector, country)
    await page.click(registrationSubmitSelector)

    // wait for the end
    await page.waitForSelector(finalSelector)
  }, 1000000)
});
