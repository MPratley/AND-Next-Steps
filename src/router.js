import Vue from "vue";
import Router from "vue-router";
import FAQ from "./views/FAQ.vue";
import FAQSearchView from "./views/FAQ/FAQSearchView.vue";
import FAQCategoryView from "./views/FAQ/FAQCategoryView.vue";
import FAQFavouriteView from "./views/FAQ/FAQFavouriteView.vue";
import NextSteps from "./views/NextSteps.vue";
import HandyANDi from "./views/HandyANDi.vue";
import HandyANDiAddNew from "./views/HandiANDi/HandyANDiAddNew.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/next-steps"
    },
    {
      path: "/next-steps",
      name: "next-steps",
      component: NextSteps
    },
    {
      path: "/faq",
      name: "faq",
      redirect: "/faq/search",
      component: FAQ,
      children: [
        {
          path: "/faq/search",
          name: "search",
          component: FAQSearchView
        },
        {
          path: "/faq/category",
          name: "category",
          component: FAQCategoryView
        },
        {
          path: "/faq/favourites",
          name: "favourites",
          component: FAQFavouriteView
        }
      ]
    },
    {
      path: "/handy-andi",
      name: "handy-andi",
      component: HandyANDi
    },
    {
      path: "/handy-andi/new",
      name: "new-handy-andi",
      component: HandyANDiAddNew
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
