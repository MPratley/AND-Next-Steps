import { createLocalVue, mount, RouterLinkStub } from "@vue/test-utils";
import Navbar from "@/components/Navbar";
import FAQ from "@/views/FAQ.vue";
import NextSteps from "@/views/NextSteps.vue";
import HandyANDi from "@/views/HandyANDi.vue";
import VueRouter from "vue-router";

// describe("File name", () => {
//   const localVue = createLocalVue();
//   localVue.use(VueRouter);
//   const routes = [
//     //Can also be rreplaced with route(router.js) file
//     {
//       path: "/faq",
//       component: FAQ,
//       name: "FAQ"
//     }
//   ];
//   const router = new VueRouter({
//     routes
//   });
//   router.push({
//     name: "FAQ",
//     params: {}
//   }); //if needed
//   const wrapper = mount(Navbar, { localVue, router });
//   beforeEach(function() {});

//   it("Method()", () => {
//     wrapper.vm.methodName();
//     expect(wrapper.vm.$route.path).toBe(routes[0].path);
//   });
// });

const wrapper = mount(Navbar, {
  stubs: {
    RouterLink: RouterLinkStub
  }
});
expect(wrapper.find(RouterLinkStub).to).toBe("/");
