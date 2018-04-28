import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Contact from "./views/Contact.vue";
import Portfolio from "./views/Portfolio.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio
    }
  ]
});
