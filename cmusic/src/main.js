/*
 * @Author: your name
 * @Date: 2021-08-16 19:59:20
 * @LastEditTime: 2021-08-17 15:41:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cmusic\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
Vue.prototype.axios=axios
Vue.config.productionTip = false
import api from "./request/api"
// 挂载到原型上
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
