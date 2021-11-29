import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./components/App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

createApp(App).use(router, axios, VueAxios, store).mount("#app");
