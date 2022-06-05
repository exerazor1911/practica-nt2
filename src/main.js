import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
Vue.config.productionTip = false


import 'jquery'
import 'popper.js'

import {router} from './router'

import './Form'


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
