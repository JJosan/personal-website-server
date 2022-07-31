import express from 'express'
import fetch from 'node-fetch'
import parser from 'node-html-parser'
import puppeteer from 'puppeteer';

var router = express.Router();

router.get('/', async (req, res) => {
    try {
        
        // do database things here

        let scrapedShoes = []

        const browser = await puppeteer.launch( {headless : true} );
        const page = await browser.newPage();
        await page.goto('https://www.nike.com/t/air-force-1-07-mens-shoes-5QFp5Z/CW2288-111');
        const shoes = await page.$eval(".css-1j3x2vp", el => el.innerHTML);
        await browser.close();
        let htmlResult = parser.parse(shoes)
        let tags = htmlResult.querySelectorAll("div")
        
        for(let i = 0; i < tags.length; i++) {
            let curr = tags[i]
            let isDisabled = curr.querySelector("input").attributes.disabled
            let name = curr.querySelector("label").textContent
            if (isDisabled != undefined) {
                scrapedShoes.push([name, 0])
            } else {
                scrapedShoes.push([name, 1])
            }
        }

        const mikeShoe = new req.models.Shoe({
            Shoes : scrapedShoes,
            LastUpdated : Math.round(Date.now() / 1000)
        })
        mikeShoe.save()
        res.json({
            shoes: scrapedShoes
        })

    } catch(e) {
        res.status(500).send(e);
    }
})

export default router;