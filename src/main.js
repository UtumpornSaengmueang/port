// src/main.js
import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // นี่จะอ้างถึง router/index.js

const app = createApp(App);
app.use(router);
app.mount("#app");
