import Vue from 'vue';
import App from './components/App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import BootstrapVue from 'bootstrap-vue';

import './assets/scss/style.scss';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
