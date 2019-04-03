import {
  shallowMount,
  mount,
  createLocalVue,
  RouterLinkStub
} from "@vue/test-utils";
import Vue from "vue";
import Navbar from "@/components/Navbar";
import FAQ from "@/views/FAQ.vue";
import NextSteps from "@/views/NextSteps.vue";
import HandyANDi from "@/views/HandyANDi.vue";

import VueRouter from "vue-router";
import routes from "@/router.js";

const localVue = createLocalVue();
localVue.use(VueRouter);

// const $route = {

//     path: "/",
//     name: "next-steps",
//     component: NextSteps
//    }
//    console.log($route);
//   {
//     path: "/faq",
//     name: "faq",
//     component: FAQ
//   },
//   {
//     path: "/handy-andi",
//     name: "handy-andi",
//     component: HandyANDi
//   }

// const wrapper = shallowMount(Navbar, {
//   mocks: {
//     $route
//   }
// })
// console.log($route);
// wrapper.vm.$route.path

// describe("Navbar", () => {
//   it("renders a child component via routing", () => {
//     const router = new VueRouter()
//     let wrapper = shallowMount(Navbar, {
//       stubs: ["router-link", "router-view"]
//     })
//     router.push("/faq")
//     // Vue.nextTick( () => {
//     expect(wrapper.find(FAQ).exists()).toBe(true);
//       done();
//   // })
//   });
// });
