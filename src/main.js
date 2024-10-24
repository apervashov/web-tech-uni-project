import { createApp } from "vue";
import App from "./App.vue";
import "foundation-sites/dist/css/foundation.min.css";
import "../public/assets/style.css";
import router from "./router";
const app = createApp(App);
app.use(router);
app.mount("#app");
