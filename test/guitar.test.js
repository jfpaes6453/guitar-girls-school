import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import fs from "fs";
const loadHTMLFile = async (filePath) => {
  const fileContent = await fs.promises.readFile(filePath, "utf-8");
  return new JSDOM(fileContent, { runScripts: "dangerously" });
};
describe("virtual guitar test", () => {
  let dom;
  beforeAll(async () => {
    dom = await loadHTMLFile("pages/guitar.html");
    global.document = dom.window.document;
  });
  it("should contain a radio button to show all notes", () => {
    expect(document.getElementById("show-all-notes")).toBeDefined();
  });
});