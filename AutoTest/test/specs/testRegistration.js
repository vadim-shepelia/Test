const assert = require('assert');
const expectChai = require('chai').expect;
const mocha = require('mocha');


describe('Test', () => {
    xit('Pozitiv test', () => {
        browser.url ('http://vodafone.mysafetytest.mmska.kiev.ua/login');
        let inputPhone = $(`#login`);
        let inputPassword = $(`#pass`);
        let loginButton = $(`#loginButton`)

        inputPhone.click();
        inputPhone.setValue(`665060238`);
        browser.pause(500)

        inputPassword.click();
        inputPassword.setValue(`123456`);
        browser.pause(500);

        loginButton.click();
        browser.pause(500)

        // const isDisplayed = browser.$(".form-title").isDisplayed()
        // expectChai(isDisplayed).to.equal(true); // Chai assertion
    });

    it(`Негативный тест, пустые поля` ,() => {
        browser.url(`http://kyivstar.mysafetytest.mmska.kiev.ua/login`) ;
        let loginButton = $(`#loginButton`)
        loginButton.click();
        browser.pause(1000);

    })
});