//const { default: Page } = require("./page");
import Page from "./page";

class Login extends Page{

    get emailField () {
        return $('#Username');
    } 

    get passwordField () {
        return $('#Password');
    }

    get loginButton () {
        return $(".btn.btn-red.w-100");
    }

    get profileDropdown () {
        return $("#logoutForm .btn.btn-menu.dropdown-toggle.no-hover:first-child");
    }

    get logoutOption () {
        return $("//a[.='Logout']");
    }

    get errorInvalidLoginCred () {
        return $('.validation-summary-errors.text-danger');
    }
    /*
    get logo () {
        return $(`(//img[@class='StockEdgeLogo'])[1]`);
    }
    */
    get logo () {
        return $('[value="Logoooin"]');
    }
    
    async login (username, password) {
        await this.emailField.setValue(username);
        await this.passwordField.setValue(password);
        await browser.pause(1000);
        await this.loginButton.click();
        await browser.pause(2000);
    }

    async loginMultipleData (loginData) {
        await this.emailField.setValue(loginData.email);
        await this.passwordField.setValue(loginData.password);
        await browser.pause(1000);
        await this.loginButton.click();
        await browser.pause(2000);
    }

    async logout () { 
        await (await this.profileDropdown).waitForDisplayed();
        await this.profileDropdown.click();
        await (await this.logoutOption).waitForDisplayed();
        await this.logoutOption.click();
        await browser.pause(2000);
    }

    async open () {
        super.open("https://stockedge.com/Account/Login");
        await browser.maximizeWindow();
        //await browser.pause(5000);
    }

}

export default new Login();