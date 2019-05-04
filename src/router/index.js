import Vue from 'vue'
import Router from 'vue-router'
import Products from '../components/Products'
import Services from '../components/Services'
import NavBar from '../components/NavBar'
import Total from '../components/Total'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NavBar',
      components: {
        default: NavBar,
        second: Services
      }
    },
    {
      path: '/second',
      components: {
        default: NavBar, second: Products, third: Total
      }
    }
  ]
})
