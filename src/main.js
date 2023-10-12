import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VIntersection from "./directives/VIntersection";

createApp(App)
  .use(store)
  .use(router)
  .directive("intersection", VIntersection)
  .mount("#app");
