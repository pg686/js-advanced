const { chromium } = require('playwright-chromium');

const { expect } = require('chai');

let browser, page; // Declare reusable variables
let baseUrl = 'http://127.0.0.1:5500/01.Messenger/'
function fakeResponse(data){
return {
    status: 200,
    headers: {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}
}
let testCreateMessage = {
    3: {
        author: 'Random',
        content: 'Say something',
        _id: 3
    }
}
let testMessages = {
    1: {
        author: 'Pesho',
        content: 'My message'
    },
    2: {
        author: 'Pesho2',
        content: 'My message'
    },
    3: {
        author: 'Pesho3',
        content: 'My message'
    },
    4: {
        author: 'Pesho4',
        content: 'My message'
    }
}


describe('E2E tests', function() {

before(async () => { 
    browser = await chromium.launch({headless:false,slowMo:1000}); 
   // browser = await chromium.launch(); 

});

after(async () => { await browser.close(); });

beforeEach(async () => { page = await browser.newPage(); });

afterEach(async () => { await page.close(); });

describe('load messages', ()=>{
    it('should call server'  , async () => {
        await page.route('**/jsonstore/messenger', route => route.fulfill(fakeResponse(testMessages)));
       await page.goto(baseUrl)
        const [response] = await Promise.all([
            page.waitForResponse('**/jsonstore/messenger'),
            page.click('#refresh')
        ]);
        let result = await response.json();
        expect(result).to.eql(testMessages)
    });
    it('should show data in text area'  , async () => {
        await page.route('**/jsonstore/messenger', route => route.fulfill(fakeResponse(testMessages)));
       await page.goto(baseUrl)
        const [response] = await Promise.all([
            page.waitForResponse('**/jsonstore/messenger'),
            page.click('#refresh')
        ]);
       let textAreaText = await page.$eval('#messages',(textArea) => textArea.value);
       let text = Object.values(testMessages)
       .map(v => `${v.author}: ${v.content}`).join('\n');
    expect(textAreaText).to.eql(text);
    });
});
describe('send messages', ()=>{
    it('should call server'  , async () => {
        let appRequest = undefined;
        let expected = {
            author: 'Random',
            content: 'Say something'
        }
        await page.route('**/jsonstore/messenger', (route,request) =>{
            if(request.method().toLowerCase() === 'post'){
                appRequest = request.postData()
                route.fulfill(fakeResponse(testCreateMessage)) ;
            }});
       await page.goto(baseUrl)
       await page.fill('#author',   expected.author);
       await page.fill('#content',  expected.content);
        const [response] = await Promise.all([
            page.waitForResponse('**/jsonstore/messenger'),
            page.click('#submit')
        ]);

    
        let result = await JSON.parse(appRequest);
        expect(result).to.eql(expected)
    });
    it('should clear inputs'  , async () => {
        let appRequest = undefined;
        let expected = {
            author: 'Random',
            content: 'Say something'
        }
        await page.route('**/jsonstore/messenger', (route,request) =>{
            if(request.method().toLowerCase() === 'post'){
                appRequest = request.postData()
                route.fulfill(fakeResponse(testCreateMessage)) ;
            }});
       await page.goto(baseUrl)
       await page.fill('#author',   expected.author);
       await page.fill('#content',  expected.content);

        const [response] = await Promise.all([
            page.waitForResponse('**/jsonstore/messenger'),
            page.click('#submit')
        ]);
let authorVal = await page.$eval('#author', a => a.value);
let contentVal = await page.$eval('#content', a => a.value);
   //     let result = await JSON.parse(appRequest);
        expect(authorVal).to.equal('');
        expect(contentVal).to.equal('');
    });
});


});