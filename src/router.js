import Vue from "vue";
import Router from "vue-router";
import FAQ from "./views/FAQ.vue";
import NextSteps from "./views/NextSteps.vue";
import HandyANDi from "./views/HandyANDi.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/path",
      name: "next-steps",
      component: NextSteps
    },
    {
      path: "/faq",
      name: "faq",
      component: FAQ
    },
    {
      path: "/handy-andi",
      name: "handy-andi",
      component: HandyANDi
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
