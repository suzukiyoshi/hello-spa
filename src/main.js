// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store' // store.jsの読み込み
//import store from './store/store';
import router from './router'
//import { routes } from './routes';
//import router from './router.js' // この行を追加
import axios from 'axios' // この行を追加
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

Vue.prototype.$axios = axios; // この行を追加

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
