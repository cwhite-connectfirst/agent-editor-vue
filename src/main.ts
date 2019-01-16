import Vue from 'vue'
import VModal from 'vue-js-modal';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue'
import store from "./store";

Vue.config.productionTip = false

Vue.use(VModal);
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
