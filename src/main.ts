import { createApp } from "vue";
import "./styles/styles.scss";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(fab, fas, far);
const pinia = createPinia();

createApp(App).use(router).use(pinia).component("fa", FontAwesomeIcon).mount("#app");
