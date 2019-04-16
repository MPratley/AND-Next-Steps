import "jsdom-global/register";
import FAQFavouriteView from "@/views/FAQ/FAQFavouriteView.vue";
import Vue from "vue";

const Constructor = Vue.extend(FAQFavouriteView);
const vm = new Constructor().$mount();
describe("FAQFavouriteView", () => {
  it("should render", () => {
    expect(vm.$el.querySelector("h2").textContent).toContain(
      "Your starred questions"
    );
  });
  it("should match the snapshot", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
