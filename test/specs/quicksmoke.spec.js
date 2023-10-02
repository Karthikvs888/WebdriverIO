import Login from '../pageobjects/selogin.page';
import testData from '../constants/testData.json';
import { expect as chaiExpect} from 'chai'

describe('Login', ()=>{

    it('Verify that Stock Edge Login page is launched when the user enters valid URL', async ()=>{
        Login.open();
        await browser.pause(3000);
        expect(await browser.getTitle()).toEqual('Sign In');
        //console.log("Changes made in repo - GitHub Pull");

        //console.log("Local changes");
        //console.log("Remote changes");
    });
    /*
    it.skip('Verify that the following elements are displayed in the login page: Logo, Email field, Password field, Remember me? checkbox, Login button, Forgot your password? link, Search bar, Create your account button', async ()=>{
        // Using default wdio library for assertion -> Test passes even when logo is not displayed to overcome this this we use Chai JS for assertion
        //expect(await Login.logo.isDisplayed());
        //console.log(await Login.logo.isDisplayed());
        //console.log("Check");

        //Using Chai JS
        chaiExpect(await Login.logo.isDisplayed()).to.be.true;
        //console.log(await Login.logo.isDisplayed());
        //console.log("Check Test Github");
    })
    */

    it('Verify that the user is navigated to Home page when the user enters valid login credentials.', async ()=>{
        //await Login.login("karthikvs444gmail.com", "Rock@123")
        await Login.login(testData.login.email, testData.login.password)
        expect(await browser.getTitle()).toEqual('Best Indian Stock Market App for Android and iPhone - StockEdge');
        await Login.logout();
    })

    it('Verify that an appropriate error message is displayed when the user tries to Login with invalid credentials.', async ()=>{
        Login.open();
        await Login.login(testData.login.invalidEmail, testData.login.invalidPassword);
        // await browser.pause(3000);
        await Login.errorInvalidLoginCred.waitForDisplayed({ timeout: 3000 });
        console.log(await Login.errorInvalidLoginCred.getText());
        //expect(await Login.errorInvalidLoginCred.getText()).toEqual('iInvalid login attempt.');

        //Using Chai JS
        chaiExpect(await Login.errorInvalidLoginCred.getText()).eql('Invalid username or password');
    })

    it('Verify that the user is navigated to Home page when the user enters valid login credentials.', async ()=>{
        //await Login.login("karthikvs444gmail.com", "Rock@123")
        Login.open();
        await Login.loginMultipleData(testData.login)
        expect(await browser.getTitle()).toEqual('Best Indian Stock Market App for Android and iPhone - StockEdge');
    })

})
