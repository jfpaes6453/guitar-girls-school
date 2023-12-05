import { describe, expect, it, beforeAll, vi } from 'vitest'
import { JSDOM } from 'jsdom'
describe("page home test", () => {
    let dom
    let window
    let document
    let button
    let buttonInstrument
    beforeAll(async () => {
        dom = await JSDOM.fromFile("./index.html", {
            resources: "usable",
            runScripts: "dangerously"
        })
        window = dom.window
        document = dom.window.document
    })
    it("Spotify icon should link to Spotify landing page", () => {
        let iconSpotify = document.querySelector("#footer-icon-spotify")
        expect(iconSpotify.href).toEqual("https://spotify.com/");
    })
    it("Email address should link to Outlook landing page", () => {
        let emailAddress = document.querySelector(".footer-email");
        expect(emailAddress.href).toEqual("https://outlook.live.com/");
    })
})
