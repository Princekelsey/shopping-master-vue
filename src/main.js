import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueFirestore from "vue-firestore";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "popper.js";

import "./assets/app.scss";
import { auth } from "./firebase";

Vue.component("Intro", require("./components/Intro.vue").default);

Vue.use(VueFirestore, {
  key: "id", // the name of the property. Default is '.key'.
  enumerable: true //  whether it is enumerable or not. Default is true.
});

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueFirestore);

Vue.config.productionTip = false;

let app = "";

auth.onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
