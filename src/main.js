import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import router from '../src/router/index'

Vue.config.productionTip = false
import instance_ from '../src/api';
// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.instance = instance_;

new Vue({
  el: '#app',
  data () {
    return {
    }
  },
  router
})

