import Login from '../pageobjects/selogin.page';
import testData from '../constants/testData.json';
import { expect as chaiExpect} from 'chai'

describe('Features wdio-v7', ()=>{

    it('Tesseract - Read text from a image', async ()=>{

        const tesseract = require("node-tesseract-ocr")
        //const img = "https://tesseract.projectnaptha.com/img/eng_bw.png"
        const img = "E:/Extras/TesseractImage.jpg"
        const text = await tesseract.recognize(img) 
        console.log(text)
    });
    

})
