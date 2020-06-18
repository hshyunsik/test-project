import Vue from 'vue';
import App from './views/App/index.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBTdPbjugDqd2Nn0huomkowwJVCrm_-EBY',
    libraries: 'places' // necessary for places input
  }
});

Vue.config.silent = true;
Vue.config.productionTip = false;
if (process.env.NODE_ENV === 'development') {
  console.log('development');
} else {
  console.log('production');
}
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
