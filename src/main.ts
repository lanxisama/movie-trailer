import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//在这里引入全部的全局组件
import "./registerServiceWorker";
import globalComponent from "@/assets/js/components";
import lazyPlugin from "vue3-lazy";

import "@/assets/styles/reset.styl";

const app = createApp(App);

app.config.errorHandler = function(e:unknown):void{
  console.warn(e)
}
app
  .use(router)
  .use(store)
  .use(globalComponent)
  .use(lazyPlugin, {
    loading: require("@/assets/images/loading.png"),
    error: require("@/assets/images/loading.png")
  })
  .mount("#app");
