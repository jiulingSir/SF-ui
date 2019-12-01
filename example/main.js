import Vue from 'vue';
import App from './app.vue';
import SfUI from '../src/index';

Vue.use(SfUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
