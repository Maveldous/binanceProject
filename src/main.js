import Vue from 'vue';
import App from './App.vue';
import myCore from './plugins/myCore';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.baseURL = 'https://api.binance.com/api/v3/';
Vue.use(myCore);

new Vue({
  render: h => h(App),
}).$mount('#app');
