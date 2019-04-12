import "jsdom-global/register";
import TheBottomNavBar from "@/components/TheBottomNavBar.vue";
import Vue from "vue";

const Constructor = Vue.extend(TheBottomNavBar);
const vm = new Constructor().$mount();
describe("TheBottomNavBar", () => {
  it("should render", () => {
    expect(vm.$el.querySelector("router-link").textContent).toContain(
      "Next Steps"
    );
  });
  it("should match the snapshot", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
