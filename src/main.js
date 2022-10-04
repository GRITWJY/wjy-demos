import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/progressive.styl";
Vue.config.productionTip = false;
import progressive from "./directives/progressive";
Vue.use(progressive, {
  removePreview: true,
  scale: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
