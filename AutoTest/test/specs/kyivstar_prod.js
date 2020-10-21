const assert = require('assert')

describe('Test_KYIVSAT', () => {

    xit("sms ", ()=>{
        browser.url(`https://www.mb.kyivstar.ua`);
        let poppap = $(`[href="#popup:zachitaplus"]`)
        poppap.click();
        browser.pause(200);

        let inputNumber =$(`.user_phone`).$(`#connect_phone_protectionplus`);
        inputNumber.addValue(980444444444)

        let button = $(`.key_send`)
        button.isClickable()
        button.click()
        browser.pause(3000)

    });
// Кликабельные ли кнопки и куда они ведут
    it(`isClickabel`, () => {
        browser.url(`https://www.mb.kyivstar.ua`)
        let button_HowToProtect = $(`[href="#rec229886033"]`);
        let buttob_WhatIsIncluded = $ (`[href="#rec229886034"]`);
        let button_Subscriptions = $(`[href="#rec229886038"]`);
        let button_IfPhoneIsLost = $(`[href="#rec229886041"]`);
        let button_CommonQuestions = $(`[href="#rec229886042"]`)

        button_HowToProtect.isClickable();
        buttob_WhatIsIncluded.isClickable();
        button_Subscriptions.isClickable();
        button_IfPhoneIsLost.isClickable();
        button_CommonQuestions.isClickable();

        assert(button_HowToProtect === $('[href="#rec229886033"]'));
        assert(buttob_WhatIsIncluded === $('[href="#rec229886034"]'));
        assert( button_CommonQuestions === $('[href="#rec229886042"]'));
        assert(button_Subscriptions === $('[href="#rec229886038"]') );
        assert(button_IfPhoneIsLost === $('[href="#rec229886041"]'));
    });

    xit(`switch language`, () => {
        browser.url(`https://www.mb.kyivstar.ua`)
        let buttonOpen = $(`[data-tooltip-menu-id="232294284"]`)
        buttonOpen.click();
        let nextLang = $(`[data-menu-item-number="2"]`)
        nextLang.click()

    });
})