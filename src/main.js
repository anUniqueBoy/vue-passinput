import Vue from 'vue'
import App from './App.vue'

import vuePassinput from './lib/index.js'
Vue.use(vuePassinput)

new Vue({
  el: '#app',
  render: h => h(App)
})
