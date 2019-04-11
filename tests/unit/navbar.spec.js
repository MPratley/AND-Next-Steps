describe("Next Steps", () => {
  beforeAll(async () => {
    jest.setTimeout(10000);
    await browser.newPage();
    await page.goto("http://localhost:8080", {
      waitUntil: "load"
    });
  });

  it("Should match correct URL", async () => {
    const url = await page.url();

    expect(url).toBe("http://localhost:8080/#/next-steps");
  });

  it("When page opens, page title should match requirement", async () => {
    const textContent = await page.evaluate(() =>
      [...document.getElementsByTagName("title")].map(elem => elem.innerText)
    );

    expect(textContent).toEqual(["and-next-steps"]);
  });
  it("When user clicks on FAQ link, then navigates new page URL matches", async () => {
    jest.setTimeout(10000);

    await page.evaluate("a", { text: "FAQ" });

    const url = await page.url();

    expect(url).toMatch("http://localhost:8080/#/faq/search");
  });
});
