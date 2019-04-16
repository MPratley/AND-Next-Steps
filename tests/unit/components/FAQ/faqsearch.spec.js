describe("FAQCategory", () => {
  beforeAll(async () => {
    jest.setTimeout(10000);
    await browser.newPage();
    await page.goto("http://localhost:8080/#/faq/", {
      waitUntil: "load"
    });
  });

  it("Should match correct URL", async () => {
    const url = await page.url();

    expect(url).toBe("http://localhost:8080/#/faq/search");
  });

  it("When page opens, the it should have only one H2 header", async () => {
    jest.setTimeout(10000);
    const textContent = await page.evaluate(() =>
      [...document.querySelector("h2")].map(elem => elem.innerText)
    );

    expect(textContent.length).toBe(1);
  });

  it("When page opens, page title should match requirement", async () => {
    const textContent = await page.evaluate(() =>
      [...document.getElementsByTagName("title")].map(elem => elem.innerText)
    );

    expect(textContent).toEqual(["and-next-steps"]);
  });
});
