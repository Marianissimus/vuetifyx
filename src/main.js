import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import router from './router/index.js'
import Bookings from './components/Bookings'


Vue.use(Vuetify, {
  iconfont: 'md'
})

Vue.component('make-a-booking', Bookings)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
