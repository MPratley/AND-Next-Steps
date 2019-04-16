import "jsdom-global/register";
import FAQSearchView from "@/views/FAQ/FAQSearchView.vue";
import Vue from "vue";

const Constructor = Vue.extend(FAQSearchView);
const vm = new Constructor().$mount();
describe("FAQSearchView", () => {
  it("should render correctly", () => {
    expect(vm.$el.querySelectorAll("h4").textContent).toContain("Back");
  });
  it("should match the snapshot", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
