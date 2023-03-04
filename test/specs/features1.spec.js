import Login from '../pageobjects/selogin.page';
import testData from '../constants/testData.json';
import { expect as chaiExpect} from 'chai'
import { faker } from '@faker-js/faker';

describe('Login - ', ()=>{

    xit("Robot JS - Move Mouse", async ()=>{
        await browser.url('https://www.globalsqa.com/demo-site/draganddrop/');
        console.log(await browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(1000);

        const elem1 = await $("//input[@id='s']");
        await elem1.click();
        //await elem.setValue("test");

        var robot = require("robotjs");
        robot.typeString("Test");
        await browser.pause(2000);
        
        const elem2 = await $("(//a[.='Home'])[1]");
        const elem3 = await $("(//li[@class='ui-widget-content ui-corner-tr ui-draggable ui-draggable-handle'])[1]");
        const ae = await $("//li[.='Accepted Elements']");
        await ae.click();
        const propagation = await $("#Propagation");

        
        console.log(propagation.getText());

        const location = await propagation.getLocation();
        console.log(location); // outputs: { x: 150, y: 20 }

        const xLocation = await propagation.getLocation('x')
        console.log(xLocation); // outputs: 150

        const yLocation = await propagation.getLocation('y')
        console.log(yLocation); // outputs: 20

        var robot = require("robotjs");
        robot.moveMouse(xLocation + 10 ,yLocation + 150);
        await browser.pause(5000);
        //robot.mouseClick("right");
        //await browser.pause(5000);

    });

    xit("Robot JS - Drag and Drop", async ()=>{
        await browser.url('https://demo.guru99.com/test/drag_drop.html');
        console.log(await browser.getUrl());

        await browser.maximizeWindow();
        await browser.pause(1000);

        const elem = await $("(//a[@class='button button-orange'])[2]");
        const elem2 = await $("(//ol[@class='field13 ui-droppable ui-sortable'])[1]");
        
        var robot = require("robotjs");

        const location = await elem.getLocation();
        console.log(location); // outputs: { x: 150, y: 20 }

        const xLocation = await elem.getLocation('x')
        console.log(xLocation); // outputs: 150

        const yLocation = await elem.getLocation('y')
        console.log(yLocation); // outputs: 20

        var robot = require("robotjs");
        robot.moveMouse(xLocation + 10 ,yLocation + 150); // Sometimes we may have to adjust x and y location by doing trial and error
        //robot.moveMouse(xLocation,yLocation);
        await browser.pause(5000);
        //robot.mouseClick("right");
        //await browser.pause(5000);

        robot.mouseClick(); 
        robot.mouseToggle("down", "left");

        const xLocation2 = await elem2.getLocation('x')
        console.log(xLocation); // outputs: 150

        const yLocation2 = await elem2.getLocation('y')
        console.log(yLocation); // outputs: 20

        robot.dragMouse(xLocation2,yLocation2 + 150);
        //robot.dragMouse(xLocation2,yLocation2);
        robot.mouseToggle("up", "left");
        await browser.pause(2000);
        await elem2.scrollIntoView();
        await browser.pause(5000);

    });

    xit("wdio-v7 Drag and Drop", async ()=>{
        await browser.url('https://demo.guru99.com/test/drag_drop.html');
        console.log(await browser.getUrl());

        await browser.maximizeWindow();
        await browser.pause(1000);

        const elem = await $("(//a[@class='button button-orange'])[2]");
        const target = await $("(//ol[@class='field13 ui-droppable ui-sortable'])[1]");
        await elem.dragAndDrop(target) 
        await target.scrollIntoView();
        await browser.pause(5000);
    });

    xit("Convert String to Integer after getText", async ()=>{
        await browser.url('https://demo.guru99.com/test/drag_drop.html');
        console.log(await browser.getUrl());

        await browser.maximizeWindow();
        await browser.pause(1000);

        const elem = await $("(//a[@class='button button-orange'])[2]");
        const text = await elem.getText();
        console.log(text)

        // Convert String 5000 to integer
        var parsed = parseInt(text, 10);

        // Verify wether the string is converted to number
        console.log(1+1);          // Output = 2
        console.log(1+ parsed);    // Output = 1 + 5000 = 5001
        console.log(1+ text);      // Output = 1 + "5000" = 15000

        await browser.pause(5000);

    });

    xit("Upload a file - Using wdio-v7 Example_1 [When input file is not hidden]", async ()=>{
        await browser.url('https://the-internet.herokuapp.com/upload')
        await browser.maximizeWindow();

        const filePath = "E:/Extras/TesseractImage.jpg";
        const remoteFilePath = await browser.uploadFile(filePath)

        await $('#file-upload').setValue(remoteFilePath)
        await $('#file-submit').click()

        await browser.pause(4000);
    });

    xit("Upload a file - Using wdio-v7 Example_2 [When input file is hidden] and browser.execute using css selector(commented)", async ()=>{

        await browser.url('https://online2pdf.com/')
        await browser.maximizeWindow();

        const inputDiv = await $("#div_file_box0"); //Hidden
        const input = await $("#input_file0"); 
        const submitBtn = await $(".convert_button"); 

        // store test file path
        //const filePath = path.join(__dirname, "..", "resources", "Basic.pdf");  // --> '/Users/karthikvs/Documents/UnknownMoon/test/resources/Basic.pdf'
        //const filePath = path.join(__dirname, './resources/Basic.pdf'); // --> '/Users/karthikvs/Documents/UnknownMoon/test/specs/resources/Basic.pdf'
        const filePath = 'E:/Extras/TesseractImage.jpg';

        // use browser.uploadFile to upload the test file
        const remoteFilePath = await browser.uploadFile(filePath)

        browser.execute(function () {
            document.getElementById('div_file_box0').style.display = 'block';     
            //document.querySelector('input[type="file"]').style.display = 'block'; // Used for elements that do not have id or class, we can use querySelector and pass css selector

        });
    
        // wait for div to be displayed
        await inputDiv.waitForDisplayed();
    
        // set file path value in the input field
        await input.setValue(remoteFilePath);
        //await submitBtn.click(); // click the submit button
    
        // temporary pause to see if the file got upload successfully
        await browser.pause(10000);
    });

    xit("getText from list of items (map) Example Method-1", async ()=>{

        await browser.url('https://webdriver.io')

        const h3Texts = await browser.$$('h3').map((img) => img.getText())
        console.log(h3Texts);
        /**
         * returns:
         * [
         *   'Extendable',
         *   'Compatible',
         *   'Feature Rich',
         *   'Who is using WebdriverIO?',
         *   'Support for Modern Web and Mobile Frameworks',
         *   'Google Lighthouse Integration',
         *   'Watch Talks about WebdriverIO',
         *   'Get Started With WebdriverIO within Minutes'
         * ]
         */
    });  

    xit("Open a new tab, switch between tabs and close a tab ", async ()=>{
        await browser.url("https://stockedge.com/Account/Login");
        console.log(await browser.getUrl());

        await browser.maximizeWindow();
        await browser.pause(2000);        

        await browser.newWindow('https://webdriver.io'); 
        await browser.pause(2000);        

        await browser.newWindow('https://www.chaijs.com/');

        const handles = await browser.getWindowHandles()

        await browser.switchToWindow(handles[1])
        console.log(await browser.getTitle())
        //await browser.closeWindow()

        await browser.switchToWindow(handles[0])
        console.log(await browser.getTitle())

        await browser.switchToWindow(handles[2])
        console.log(await browser.getTitle())

        await browser.switchToWindow(handles[1])
        await browser.closeWindow()

        await browser.pause(3000);        
    });

    xit("Tesseract - Read text from a image", async ()=>{

        const tesseract = require("node-tesseract-ocr")

        //const img = "https://tesseract.projectnaptha.com/img/eng_bw.png"
        
        const img = "E:/Extras/TesseractImage.jpg"
        const text = await tesseract.recognize(img)
        console.log(text) 
    });

    xit('Math.random - To generate unique email, name, id etc everytime [StockEdge]', async ()=>{
        await browser.url("https://stockedge.com/Account/Login");
        console.log(await browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(2000);

        const emailField = await $('#Email');
        const passwordField = await $('#Password');
        const loginButton = await $("//input[@class='btn btn-blue w-100']");
        
        await emailField.setValue(`test-${Math.floor(Math.random() * 9999)}@yopmail.com`); // To pass a random email everytime
        await passwordField.setValue("123456");
        await browser.pause(1000);
        await loginButton.click();
        await browser.pause(2000);
    })

    xit('Faker JS - To generate random email, name, id etc', async ()=>{
        await browser.url("https://stockedge.com/Account/Login");
        console.log(await browser.getUrl());
        await browser.maximizeWindow();
        await browser.pause(2000);

        const emailField = await $('#Email');
        const passwordField = await $('#Password');
        const loginButton = await $("//input[@class='btn btn-blue w-100']");
        
        await emailField.setValue(faker.name.fullName()); // To pass a random email everytime
        await passwordField.setValue("123456");
        await browser.pause(1000);
        await loginButton.click();
        await browser.pause(2000);
    })

})
