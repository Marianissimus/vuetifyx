import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import router from './router/index.js'


Vue.use(Vuetify, {
  iconfont: 'md'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
