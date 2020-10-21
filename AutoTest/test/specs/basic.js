const assert = require('assert')

describe('Авто тесты ', () => {
    xit('should have the right title', () => {
        browser.url('https://webdriver.io')
        const title = browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen browser automation test framework for Node.js')
    })

    //RadarScreenRU 2020 2
xit('Проверка  текстовок',() =>{
    browser.url('http://radar-screen-ua-promo.mysafety.mmska.kiev.ua')
    let buttonBenefits = $(`[href="#adv"]`);
    let buttonOne = buttonBenefits.getText()
    if (buttonOne === 'Benefits'){
        console.log("Benefits :" + "true");
        }
    else{
        console.log('Benefits :' + error);
        }
    
    let buttonSubscriptions = $(`[href="#price"]`)
    let buttonTwo = buttonSubscriptions.getText();
    if (buttonTwo === 'Subscriptions'){
        console.log("Subscriptions :" + "true");
        }
    else{
        console.log('Subscriptions :' + error);
        }

    let buttonHowToActivate = $(`[href="#activate"]`)
    let buttonThree = buttonHowToActivate.getText();
    if (buttonThree === 'How to activate'){
        console.log("How to activate :" + "true");
        }
    else{
        console.log('How to activate :' + error);
        }
    })


xit('should demonstrate the addValue command',() =>{
    browser.url('http://www.radar-ua.mysafety.mmska.kiev.ua')
    let buttonCookie=$(`.js-cookie-consent-agree`);
        buttonCookie.click();
    let inputName = $(`[name="user_name"]`)
        inputName.addValue('test')
        inputName.addValue(123);

    const inputPhone = $(`[name="user_phone"]`);
        inputPhone.click();
        inputPhone.setValue('662243604');
    const button = $('.feedback_button')
        button.click() ;
        browser.pause(5000)
    
    let buttonclose = $('[data-remodal-id="call_back_success"]').$(`[data-remodal-action="close"]`);
        buttonclose.click()

    })

    xit('should demonsrate setValue command', function(){
        browser.url('https://webdriver.io');
        const elem = $(`search_input_react`);
        elem.setValue('vadim test');
        browser.pause(4000);
    })

    xit('should demonstrate the click comand', () =>{
        browser.url('https://webdriver.io');
        const blodButton = $(`[href="/blog/"]`)
        browser.pause(2000);
        blodButton.click()
        browser.pause(2000);
        const guideButton = $(`[href="/docs/gettingstarted.html"]`)
        guideButton.click()
        browser.pause(2000);
    })
//lesson 7 getAttribute
// почему всегда вот эта строчка xit('Should demonstrate the getAttributer command', () => {})
    xit('Should demonstrate the getAttributer command', () => {
        browser.url('https://webdriver.io');
        const input = $(`#search_input_react`);
        browser.pause(2000);
        let attr = input.getAttribute('title')
        console.log("Title attribute is: " + attr)

        input.setValue("test Vadim")
        attr = input.getAttribute('value')
        console.log("Value attribute is: " + attr)
    })

 //lesson 8
    xit('should demonstrate the letLocation function', () => {
        browser.url('https://webdriver.io');
        const logo = $(`#search_input_react`)
        const location = logo.getLocation();
        console.log(location);

        //Зачем эти две строчки
        const xLocation = logo.getLocation('x');
        console.log('xLocation' + xLocation);
    })

    xit('should demonstrate the getText funcion', () => {
        browser.url('https://webdriver.io');
        const blodButton = $(`[href="/blog/"]`);
        console.log('text for element:' + blodButton.getText());
    })

//Home work

    xit('Home work ', () => {
        browser.url('https://webdriver.io');
        const docsButton = $(`li a[href="/docs/api.html"]`);
        docsButton.click();
        let urlButtonApi = docsButton.getAttribute('href');
        console.log('browser address:' + urlButtonApi);

        const postTitle = $(`.postHeaderTitle`);
        let pTitle = postTitle.getText()
        console.log("Post Title is:" + pTitle);

        /* const urlTJSONWire = $(`//*[text()="JSONWire protocol"]`);
        let urlText = urlTJSONWire.getAttribute('href');
        console.log('Href is:' + urlText);*/

        const input = $(`#search_input_react`);
        input.setValue('test is ');
        input.addValue('DONE')
        browser.pause(5000);

    })

//lesson 10

    xit('should detect if an elemebt is clickable', () => {
        browser.url('https://webdriver.io');
        const blogButton = $(`[href="/blog/"]`);
        let clickable = blogButton.isClickable();
        console.log('IS CLICKABLE?: ' + clickable);
    })

    xit('should detect if an element is displayed', () => {
        browser.url('https://webdriver.io');
        const blogButton = $(`[href="/blog/"]`);
        let isDispayedBB = blogButton.isDisplayed();
        console.log('IS DISPLAYED?: ' + isDispayedBB);
    })

    xit('should detect if an element is visible', () => {
        browser.url('https://webdriver.io');
        let isBlogDispayedInVviewport = $(`[href="/blog/"]`);
            isBlogDispayedInVviewport.isDisplayedInViewport();

        let IsGitHubDisplayedInViewport = $(`#footer [href="https://github.com/webdriverio/webdriverio"]`).isDisplayedInViewport();
        console.log('isGitHubDispayedInViewport: ' + IsGitHubDisplayedInViewport);
    })

//lesson 11
    xit('should detect if an element is enabled', () =>{
        browser.url('https://theradar.com.ua');
        const buttonOkPolicy = $ (`.js-cookie-consent-agree`)
        buttonOkPolicy.click();
        const inputUserName = $ (`.user_name`);
        inputUserName.click();
        let inputName = inputUserName.isFocused()
       
        let inputNameS  = inputUserName.isEnabled();
        console.log('isFocused :' + inputName);
        console.log('isEnabled :' + inputNameS);
    })
//lesson 12
    xit('should detect if an element save screen and open new window', () => {
        browser.url(`https://theradar.com.ua`)
        let idFirstUrl = browser.getWindowHandle()
        let foto=$(`.review_user_face`);
        foto.scrollIntoView();
        foto.saveScreenshot('foto.png');

        browser.newWindow(`https://my.theradar.com.ua/user/login`);
        let idNextUrl = browser.getWindowHandle();
        browser.pause(2000)
        browser.switchToWindow(idFirstUrl);
        browser.pause(2000)
        browser.switchToWindow(idNextUrl);
        browser.pause(2000)
    })

    xit('should detect if an element wait until', () => {
        browser.url(`https://theradar.com.ua`);
        let inputName = $(`[name="user_name"]`)
        inputName.addValue('test')

        const inputPhone = $(`[name="user_phone"]`);
        inputPhone.click();
        inputPhone.setValue('38077554394');
        const button = $('.feedback_button')
        button.click();
        browser.waitUntil(() =>{
            return $(`.feedback_input`),  $(`._phone_validate`).isDisplayedInViewport()
        } ,5000 , `not work`);

        let textName = $(`.aquest_wrapper`).getHTML()
        console.log(`Весь блок` + textName)
        let textNameTwo = $(`.aquest_wrapper`).getHTML(false)
        console.log(`Второй текс` + textNameTwo);
    })
    it('houme word afte 13 lessons', () =>{
        browser.url(`https://webdriver.io/docs/api.html`);
        let windowFirst = browser.getWindowHandle()

        let link=$(`=JSONWire protocol`)
        let windowTwo=link.getAttribute(`a`);
        browser.newWindow('https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol');
        let TwoWindow = browser.getWindowHandle()
        //browser.pause(2000)

        //let elenetIsDisplayed= $(``);
       elenetIsSispayed = browser.element('.selected');
        console.log(elenetIsDisplayed);

        browser.switchToWindow('windowFirst')


    } )
})
