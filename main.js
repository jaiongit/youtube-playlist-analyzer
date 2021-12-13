const puppeteer = require('puppeteer');
const get_details = require('./helpers/data').get_details;

let link = 'https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq';
let cTab;
(async function (){
    try {
        let browserInstance = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: [
                '--start-maximized'
            ]
        })

        // select the current opened tab
        let allTabsArr = await browserInstance.pages();
        cTab = allTabsArr[0];

        await cTab.goto(link)

        // wait for the element containing playlist details and then fetch them
        await cTab.waitForSelector('h1#title');
        let name = await cTab.evaluate(select => document.querySelector(select).innerText, 'h1#title');
        let data = await cTab.evaluate(get_details, 'div#stats yt-formatted-string');
    } catch (err) {
        console.log(err);
    }
})()
