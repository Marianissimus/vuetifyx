
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Gallery from '../components/Gallery'
import Events from '../components/Events'
import Menu from '../components/Menu'
import Bookings from '../components/Bookings'
import Promotions from '../components/Promotions'
import Contact from '../components/Contact'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/promotions',
      name: 'Promotions',
      component: Promotions
    },
    {
      path: '/bookings',
      name: 'Bookings',
      component: Bookings
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ]
})