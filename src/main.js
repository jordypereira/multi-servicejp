import Vue from "vue";
import VueMq from "vue-mq";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 769,
    lg: 1200,
    xl: Infinity
  }
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
