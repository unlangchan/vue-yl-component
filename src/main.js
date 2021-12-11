import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import components from "./index";

Vue.config.productionTip = false;

Vue.use(Antd);

components.forEach((component) => {
  Vue.component(component.name, component);
});

new Vue({ render: (h) => h(App) }).$mount("#app");
