import '@/config/register-service-worker';
import router from '@/config/router';
import App from '@/pages/app/app.vue';
import store from '@/store';
import 'tailwindcss/tailwind.css';
import '@/theme/_all.scss';
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import i18n from '@/config/i18n';

Vue.use(Buefy, {
  defaultIconPack: 'fas',
});

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
