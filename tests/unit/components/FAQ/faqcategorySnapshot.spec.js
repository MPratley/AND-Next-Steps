import "jsdom-global/register";
import FAQCategoryView from "@/views/FAQ/FAQCategoryView.vue";
import Vue from "vue";
import { toMatchImageSnapshot } from "jest-image-snapshot";

expect.extend({ toMatchImageSnapshot });

const Constructor = Vue.extend(FAQCategoryView);
const vm = new Constructor().$mount();
describe("FAQCategoryView", () => {
  it("should render", () => {
    expect(vm.$el.querySelector("h2").textContent).toContain("Categories");
  });
  it("should match the snapshot", () => {
    expect(vm.$el).toMatchSnapshot();
  });

  it("renders correctly", async () => {
    jest.setTimeout(10000);
    const page = await browser.newPage();
    await page.goto("http://localhost:8080/#/faq/category");
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
