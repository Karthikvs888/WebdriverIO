//const { default: Page } = require("./page");
import Page from "./page";

class Login extends Page{

    get emailField () {
        return $('#Email');
    } 

    get passwordField () {
        return $('#Password');
    }

    get loginButton () {
        return $("//input[@class='btn btn-blue w-100']");
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

    async open () {
        super.open("https://stockedge.com/Account/Login");
        await browser.maximizeWindow();
        //await browser.pause(5000);
    }

}

export default new Login();